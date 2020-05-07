import {put, takeLatest, call, all, select} from "redux-saga/effects";

import {fetchFlourishesApi, deleteFlourishApi} from "./api";
import {
  FETCH_FLOURISHES_REQUEST,
  FETCH_FLOURISHES_SUCCESS,
  FETCH_FLOURISHES_FAILED,
  DELETE_FLOURISH_REQUEST,
  DELETE_FLOURISH_SUCCESS,
  DELETE_FLOURISH_FAILED,
  UPDATE_FLOURISHES_PARAMS,
} from "./constants";

function* fetchFlourishes(data) {
  try {
    yield put({
      type: UPDATE_FLOURISHES_PARAMS,
      payload: data.payload,
    });

    const {apiParams} = yield select((state) => state.listFlourishes);
    const response = yield call(fetchFlourishesApi, apiParams);

    yield put({
      type: FETCH_FLOURISHES_SUCCESS,
      payload: response.data,
    });
  }
  catch (e) {
    console.log(e);
    yield put({
      type: FETCH_FLOURISHES_FAILED,
      payload: e,
    });
  }
}

function* deleteFlourish(data) {
  try {
    const rows = data.payload;

    for (const id of rows) {
      yield call(deleteFlourishApi, id);
    }

    yield put({
      type: DELETE_FLOURISH_SUCCESS,
    });
    yield put({
      type: FETCH_FLOURISHES_REQUEST,
    });
  }
  catch (e) {
    yield put({
      type: DELETE_FLOURISH_FAILED,
    });
  }
}
export function* listFlourishesRootSaga() {
  yield all([
    takeLatest(FETCH_FLOURISHES_REQUEST, fetchFlourishes),
    takeLatest(DELETE_FLOURISH_REQUEST, deleteFlourish),
  ]);
}
