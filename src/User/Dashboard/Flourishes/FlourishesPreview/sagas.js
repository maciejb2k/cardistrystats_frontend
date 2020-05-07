import {put, takeLatest, call, all, select} from "redux-saga/effects";

import {history} from "App/__store__";
import {ROUTES} from "App/constants";
import {
  getFlourishGalleryApi,
  getFlourishTrackingApi,
  getFlourishApi,
  addPhotoApi,
  deletePhotoApi,
  addTrackingApi,
  deleteTrackingApi,
} from "./api";

import {
  GET_FLOURISH_DATA_REQUEST,
  GET_FLOURISH_DATA_SUCCESS,
  GET_FLOURISH_DATA_FAILED,
  DELETE_PHOTO_REQUEST,
  DELETE_PHOTO_SUCCESS,
  DELETE_PHOTO_FAILED,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILED,
  RELOAD_GALLERY_SUCCESS,
  RELOAD_GALLERY_FAILED,
  RELOAD_TRACKING_SUCCESS,
  RELOAD_TRACKING_FAILED,
  ADD_TRACKING_REQUEST,
  ADD_TRACKING_SUCCESS,
  ADD_TRACKING_FAILED,
  DELETE_TRACKING_REQUEST,
  DELETE_TRACKING_SUCCESS,
  DELETE_TRACKING_FAILED,
} from "./constants";

function* getFlourishData(data) {
  try {
    const response = yield call(getFlourishApi, data.payload);
    yield put({
      type: GET_FLOURISH_DATA_SUCCESS,
      payload: response,
    });
  }
  catch ({response}) {
    yield put({
      type: GET_FLOURISH_DATA_FAILED,
      payload: response,
    });
    history.push(ROUTES.USER.FLOURISHES.LIST);
  }
}

function* deletePhoto(data) {
  try {
    const response = yield call(deletePhotoApi, data.payload);
    yield call(reloadGallery);

    yield put({
      type: DELETE_PHOTO_SUCCESS,
      payload: response,
    });
  }
  catch ({response}) {
    yield put({
      type: DELETE_PHOTO_FAILED,
      payload: response,
    });
  }
}

function* deleteTracking(data) {
  try {
    const response = yield call(deleteTrackingApi, data.payload);
    yield call(reloadTracking);

    yield put({
      type: DELETE_TRACKING_SUCCESS,
      payload: response,
    });
  }
  catch ({response}) {
    yield put({
      type: DELETE_TRACKING_FAILED,
      payload: response,
    });
  }
}

function* addPhoto(data) {
  try {
    yield call(addPhotoApi, data.payload);
    yield call(reloadGallery);

    yield put({
      type: ADD_PHOTO_SUCCESS,
    });
  }
  catch ({response}) {
    yield put({
      type: ADD_PHOTO_FAILED,
    });
  }
}

function* reloadGallery() {
  try {
    const id = yield select((state) => state.previewFlourish.flourishData.id);
    const response = yield call(getFlourishGalleryApi, id);
    yield put({
      type: RELOAD_GALLERY_SUCCESS,
      payload: response.data,
    });
  }
  catch ({response}) {
    yield put({
      type: RELOAD_GALLERY_FAILED,
    });
  }
}

function* reloadTracking() {
  try {
    const id = yield select((state) => state.previewFlourish.flourishData.id);
    const response = yield call(getFlourishTrackingApi, id);
    yield put({
      type: RELOAD_TRACKING_SUCCESS,
      payload: response.data,
    });
  }
  catch ({response}) {
    yield put({
      type: RELOAD_TRACKING_FAILED,
    });
  }
}

function* addTracking(data) {
  console.log(data);
  try {
    yield call(addTrackingApi, data.payload);
    yield call(reloadTracking);

    yield put({
      type: ADD_TRACKING_SUCCESS,
    });
  }
  catch ({response}) {
    yield put({
      type: ADD_TRACKING_FAILED,
    });
  }
}

export function* previewFlourishRootSaga() {
  yield all([
    takeLatest(GET_FLOURISH_DATA_REQUEST, getFlourishData),
    takeLatest(ADD_PHOTO_REQUEST, addPhoto),
    takeLatest(DELETE_PHOTO_REQUEST, deletePhoto),
    takeLatest(ADD_TRACKING_REQUEST, addTracking),
    takeLatest(DELETE_TRACKING_REQUEST, deleteTracking),
  ]);
}
