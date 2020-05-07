import axios from "App/__axios__";
import {API_ENDPOINTS} from "App/constants";

export const addFlourishApi = (data) => {
  return axios({
    url: API_ENDPOINTS.USER.FLOURISHES.LIST,
    method: "POST",
    data: {
      name: data.name,
      desc: data.desc,
      creator: data.creator,
      category: data.category,
    },
  }).catch((error) => {
    // TODO
  });
};
