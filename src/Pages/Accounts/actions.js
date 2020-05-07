import {createAction} from "App/__store__/actions";
import {
  SIGN_IN_REQUEST,
  LOGOUT_REQUEST,
  REFRESH_TOKEN_REQUEST,
} from "./constants";

export const signIn = (data) => createAction(SIGN_IN_REQUEST, data);
export const logout = () => createAction(LOGOUT_REQUEST);
export const refreshToken = (config) => createAction(REFRESH_TOKEN_REQUEST, config);
