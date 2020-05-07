import {getToken, getRefreshToken} from "App/__helpers__/token";

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

const accessToken = getToken();
const refreshToken = getRefreshToken();
const tokens = accessToken && refreshToken;

const initialState = {
  isAuthenticated: tokens ? true : false,
  accessToken: tokens ? accessToken : null,
  refreshToken: tokens ? refreshToken : null,
  error: null,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case SIGN_IN_REQUEST:
    return {
      ...state,
      isAuthenticated: false,
      isLoading: true,
    };
  case SIGN_IN_SUCCESS:
    return {
      ...state,
      isAuthenticated: true,
      accessToken: action.payload.access,
      refreshToken: action.payload.refresh,
      isLoading: false,
    };
  case SIGN_IN_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      error: action.payload,
      isLoading: false,
    };
  case REFRESH_TOKEN_REQUEST:
    return {
      ...state,
    };
  case REFRESH_TOKEN_SUCCESS:
    return {
      ...state,
      accessToken: action.payload.access,
      refreshToken: null,
    };
  case REFRESH_TOKEN_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      error: null,
      isLoading: false,
    };
  case LOGOUT_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case LOGOUT_SUCCESS:
    return {
      ...state,
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      error: null,
      isLoading: false,
    };
  default:
    return state;
  };
};
