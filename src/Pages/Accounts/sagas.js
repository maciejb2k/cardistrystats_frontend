import {put, takeLatest, call, all} from "redux-saga/effects";

import {history} from "App/__store__";
import {ROUTES} from "App/constants";
import {dashRouteByRole, setUserDetails} from "App/__helpers__/user";

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
} from "./constants";

import {
  signInApi,
  fetchUserDetailsApi,
  refreshTokenApi,
  restoreRequest,
} from "./api";
import {
  setToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
} from "App/__helpers__/token";
import sessionStorageWrapper from "App/__helpers__/sessionStorage";

function* signIn(action) {
  try {
    const response = yield call(signInApi, action.payload);

    setToken(response.data.access);
    setRefreshToken(response.data.refresh);
    yield call(fetchUserDetails);

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: {
        access: response.data.access,
        refresh: response.data.refresh,
      },
    });

    history.push(dashRouteByRole());
  }
  catch ({response}) {
    yield put({
      type: SIGN_IN_FAILURE,
      payload: response,
    });
  }
}

function* fetchUserDetails() {
  try {
    const {data} = yield call(fetchUserDetailsApi);
    setUserDetails(data);
  }
  catch {
    // TODO
  }
}

function* logoutUser() {
  sessionStorageWrapper.clear();
  yield put({
    type: LOGOUT_SUCCESS,
  });
  history.push(ROUTES.HOME);
}

function* refreshToken(action) {
  try {
    const response = yield call(refreshTokenApi, getRefreshToken());

    setToken(response.data.access);
    removeRefreshToken();

    yield put({
      type: REFRESH_TOKEN_SUCCESS,
      payload: {
        access: response.data.access,
      },
    });

    yield call(restoreRequest, action.payload);
  }
  catch {
    yield put({
      type: REFRESH_TOKEN_FAILURE,
    });
  }
}

export function* accountsRootSaga() {
  yield all([
    takeLatest(SIGN_IN_REQUEST, signIn),
    takeLatest(LOGOUT_REQUEST, logoutUser),
    takeLatest(REFRESH_TOKEN_REQUEST, refreshToken),
  ]);
}
