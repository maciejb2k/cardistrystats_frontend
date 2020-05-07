import {TOKEN_LOCALSTORAGE_KEY, REFRESH_TOKEN_LOCALSTORAGE_KEY} from "App/constants";
import sessionStorageWrapper from "App/__helpers__/sessionStorage";
import jwtDecode from "jwt-decode";

export const setToken = (token) => {
  sessionStorageWrapper.set(TOKEN_LOCALSTORAGE_KEY, token);
  return true;
};

export const getToken = () => {
  return sessionStorageWrapper.get(TOKEN_LOCALSTORAGE_KEY);
};

export const removeToken = () => {
  sessionStorageWrapper.remove(TOKEN_LOCALSTORAGE_KEY);
  return true;
};

export const setRefreshToken = (refreshToken) => {
  sessionStorageWrapper.set(REFRESH_TOKEN_LOCALSTORAGE_KEY, refreshToken);
  return true;
};

export const getRefreshToken = () => {
  return sessionStorageWrapper.get(REFRESH_TOKEN_LOCALSTORAGE_KEY);
};

export const removeRefreshToken = () => {
  sessionStorageWrapper.remove(REFRESH_TOKEN_LOCALSTORAGE_KEY);
  return true;
};

export const decodeToken = (token) => jwtDecode(token);

export const tokenExpired = (token) => {
  return (decodeToken(token).exp < Date.now() / 1000) ? true : false;
};
