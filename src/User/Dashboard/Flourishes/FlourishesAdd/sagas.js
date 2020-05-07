import {put, takeLatest, call, all} from "redux-saga/effects";

import {history} from "App/__store__";
import {ROUTES} from "App/constants";
import {alertSuccess} from "App/__helpers__/alerts";
import {addFlourishApi} from "./api";

import {
  ADD_FLOURISH_REQUEST,
  ADD_FLOURISH_SUCCESS,
  ADD_FLOURISH_FAILED,
} from "./constants";

function* addFlourish(data) {
  try {
    const response = yield call(addFlourishApi, data.payload);
    yield put({
      type: ADD_FLOURISH_SUCCESS,
      payload: response,
    });
    alertSuccess("Success", "Succesfully created new flourish!");
    history.push(ROUTES.USER.FLOURISHES.LIST);
  }
  catch ({response}) {
    yield put({
      type: ADD_FLOURISH_FAILED,
      payload: response,
    });
  }
}

export function* addFlourishRootSaga() {
  yield all([
    takeLatest(ADD_FLOURISH_REQUEST, addFlourish),
  ]);
}
