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
  RELOAD_GALLERY_REQUEST,
  RELOAD_GALLERY_SUCCESS,
  RELOAD_GALLERY_FAILED,
  RELOAD_TRACKING_FAILED,
  RELOAD_TRACKING_REQUEST,
  RELOAD_TRACKING_SUCCESS,
  ADD_TRACKING_REQUEST,
  ADD_TRACKING_SUCCESS,
  ADD_TRACKING_FAILED,
  DELETE_TRACKING_REQUEST,
  DELETE_TRACKING_SUCCESS,
  DELETE_TRACKING_FAILED,
} from "./constants";

const initialState = {
  data: [],
  flourishData: {},
  flourishGallery: [],
  flourishTracking: [],
  error: {},
  isLoading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case GET_FLOURISH_DATA_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case GET_FLOURISH_DATA_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      flourishData: action.payload[0].data,
      flourishGallery: action.payload[1].data,
      flourishTracking: action.payload[2].data,
    };
  case GET_FLOURISH_DATA_FAILED:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  case DELETE_PHOTO_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case DELETE_PHOTO_SUCCESS:
    return {
      ...state,
      isLoading: false,
    };
  case DELETE_PHOTO_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  case ADD_PHOTO_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case ADD_PHOTO_SUCCESS:
    return {
      ...state,
      isLoading: false,
    };
  case ADD_PHOTO_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  case RELOAD_GALLERY_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case RELOAD_GALLERY_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  case RELOAD_GALLERY_SUCCESS:
    return {
      ...state,
      flourishGallery: action.payload,
      isLoading: false,
    };
  case RELOAD_TRACKING_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case RELOAD_TRACKING_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  case RELOAD_TRACKING_SUCCESS:
    return {
      ...state,
      flourishTracking: action.payload,
      isLoading: false,
    };
  case ADD_TRACKING_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case ADD_TRACKING_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  case ADD_TRACKING_SUCCESS:
    return {
      ...state,
      isLoading: false,
    };
  case DELETE_TRACKING_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case DELETE_TRACKING_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  case DELETE_TRACKING_SUCCESS:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  };
}
