import axios from "App/__axios__";
import {API_ENDPOINTS} from "App/constants";

export const signInApi = (data) => (
  axios({
    url: API_ENDPOINTS.ACCOUNTS.TOKEN,
    method: "POST",
    data: {
      email: data.email,
      password: data.password,
    },
  }).catch((error) => {
    // TODO
  })
);

export const fetchUserDetailsApi = () => (
  axios({
    url: API_ENDPOINTS.ACCOUNTS.DETAILS,
    method: "GET",
  }).catch((error) => {
    // TODO
  })
);

export const refreshTokenApi = (refreshToken) => (
  axios({
    url: API_ENDPOINTS.TOKEN.REFRESH,
    method: "POST",
    data: {
      refresh: refreshToken,
    },
  }).catch((error) => {
    // TODO
  })
);

export const restoreRequest = (config) => axios(config);
