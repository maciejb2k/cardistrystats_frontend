import axios from "App/__axios__";
import {API_ENDPOINTS} from "App/constants";
import {replaceIdParam} from "App/__helpers__/url";

export const fetchFlourishesApi = (params) => {
  return axios({
    url: API_ENDPOINTS.USER.FLOURISHES.LIST,
    method: "GET",
    params,
  }).catch((error) => {
    // TODO
  });
};

export const deleteFlourishApi = (id) => {
  const url = replaceIdParam(API_ENDPOINTS.USER.FLOURISHES.LIST_ID, id);
  return axios({
    url,
    method: "DELETE",
  }).catch((error) => {
    // TODO
  });
};
