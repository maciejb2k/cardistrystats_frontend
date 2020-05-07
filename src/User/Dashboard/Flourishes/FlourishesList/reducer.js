import {
  FETCH_FLOURISHES_REQUEST,
  FETCH_FLOURISHES_SUCCESS,
  FETCH_FLOURISHES_FAILED,
  UPDATE_FLOURISHES_PARAMS,
  DELETE_FLOURISH_REQUEST,
  DELETE_FLOURISH_SUCCESS,
  DELETE_FLOURISH_FAILED,
} from "./constants";

const initialState = {
  data: {},
  error: {},
  apiParams: {
    ordering: "",
    search: "",
    page: 1,
  },
  isLoading: true,
  isDeleting: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case FETCH_FLOURISHES_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case FETCH_FLOURISHES_SUCCESS:
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  case FETCH_FLOURISHES_FAILED:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };

  case DELETE_FLOURISH_REQUEST:
    return {
      ...state,
      isDeleting: true,
    };
  case DELETE_FLOURISH_SUCCESS:
    return {
      ...state,
      isDeleting: false,
    };
  case DELETE_FLOURISH_FAILED:
    return {
      ...state,
      isDeleting: false,
    };

  case UPDATE_FLOURISHES_PARAMS:
    return {
      ...state,
      apiParams: {
        ...state.apiParams,
        ...action.payload,
      },
    };
  default:
    return state;
  };
}
