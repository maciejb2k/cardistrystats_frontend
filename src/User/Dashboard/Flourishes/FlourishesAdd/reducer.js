import {
  ADD_FLOURISH_REQUEST,
  ADD_FLOURISH_SUCCESS,
  ADD_FLOURISH_FAILED,
} from "./constants";

const initialState = {
  data: {},
  error: {},
  isLoading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case ADD_FLOURISH_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case ADD_FLOURISH_SUCCESS:
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  case ADD_FLOURISH_FAILED:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };

  default:
    return state;
  };
}
