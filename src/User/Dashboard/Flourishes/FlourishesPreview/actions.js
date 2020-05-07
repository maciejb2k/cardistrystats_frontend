import {createAction} from "App/__store__/actions";
import {
  GET_FLOURISH_DATA_REQUEST,
  ADD_PHOTO_REQUEST,
  DELETE_PHOTO_REQUEST,
  ADD_TRACKING_REQUEST,
  DELETE_TRACKING_REQUEST,
} from "./constants";

export const getFlourishData = (data) => createAction(GET_FLOURISH_DATA_REQUEST, data);
export const addPhoto = (data) => createAction(ADD_PHOTO_REQUEST, data);
export const deletePhoto = (data) => createAction(DELETE_PHOTO_REQUEST, data);
export const addTracking = (data) => createAction(ADD_TRACKING_REQUEST, data);
export const deleteTracking = (data) => createAction(DELETE_TRACKING_REQUEST, data);
