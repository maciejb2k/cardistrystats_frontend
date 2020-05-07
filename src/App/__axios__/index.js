import axios from "axios";

import axiosDebug from "App/__axios__/debug";
import {getToken, tokenExpired, getRefreshToken} from "App/__helpers__/token";
import {TOKEN_TYPE, API_PREFIX} from "App/constants";
import {alertError} from "App/__helpers__/alerts";
import store, {history} from "App/__store__";
import {logout, refreshToken} from "Pages/Accounts/actions";
import {ROUTES} from "App/constants";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}${API_PREFIX}`,
});

axiosInstance.interceptors.request.use(
  (request) => {
    axiosDebug({type: "request"}, request);
    const accessToken = getToken();
    if (accessToken) {
      request.headers.Authorization = `${TOKEN_TYPE} ${accessToken}`;
    }
    return request;
  },
  (error) => {
    axiosDebug({type: "error"}, error.response);
    return Promise.reject(error);
  });

axiosInstance.interceptors.response.use(
  (response) => {
    axiosDebug({type: "response"}, response);
    return Promise.resolve(response);
  },
  (error) => {
    const originalRequest= error.config;
    const accessToken = getToken();
    const returnValue = Promise.reject(error);

    if (!error.response) {
      alertError("Service Offline", "API is not responding. Try again later.")
        .then(() => {
          store.dispatch(logout());
        });
    }

    if (accessToken && tokenExpired(accessToken) && getRefreshToken()) {
      store.dispatch(refreshToken(originalRequest));
      return returnValue;
    }

    if ((error.response.status === 401)
            && (history.location.pathname !== ROUTES.ACCOUNTS.SIGN_IN)) {
      alertError("Oops!", "Session expired and you've been logged out.");
      store.dispatch(logout());
    }
    axiosDebug({type: "error"}, error.response);
    return returnValue;
  });

export default axiosInstance;
