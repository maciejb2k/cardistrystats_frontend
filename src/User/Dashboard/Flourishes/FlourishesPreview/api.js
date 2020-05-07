import axios from "App/__axios__";
import {API_ENDPOINTS} from "App/constants";
import {replaceIdParam} from "App/__helpers__/url";

export const getFlourishGalleryApi = (id) => {
  return axios({
    url: replaceIdParam(API_ENDPOINTS.USER.FLOURISHES.GALLERY_ALL, id),
    method: "GET",
  }).catch((error) => {
    // TODO
  });
};

export const getFlourishDataApi = (id) => {
  return axios({
    url: replaceIdParam(API_ENDPOINTS.USER.FLOURISHES.LIST_ID, id),
    method: "GET",
  }).catch((error) => {
    // TODO
  });
};

export const getFlourishTrackingApi = (id) => {
  return axios({
    url: replaceIdParam(API_ENDPOINTS.USER.FLOURISHES.TRACKING_ALL, id),
    method: "GET",
    params: {
      ordering: "-date",
    },
  }).catch((error) => {
    // TODO
  });
};

export const getFlourishApi = (id) => (
  Promise.all([
    getFlourishDataApi(id),
    getFlourishGalleryApi(id),
    getFlourishTrackingApi(id),
  ])
);

export const deletePhotoApi = (id) => {
  return axios({
    url: replaceIdParam(API_ENDPOINTS.USER.FLOURISHES.GALLERY_ID, id),
    method: "DELETE",
  }).catch((error) => {
    // TODO
  });
};

export const deleteTrackingApi = (id) => {
  return axios({
    url: replaceIdParam(API_ENDPOINTS.USER.FLOURISHES.TRACKING_ID, id),
    method: "DELETE",
  }).catch((error) => {
    // TODO
  });
};

export const addPhotoApi = (data) => {
  console.log(data);

  const formData = new FormData();
  formData.append("photo", data.photo);
  formData.append("flourish", data.id);

  return axios({
    url: API_ENDPOINTS.USER.FLOURISHES.GALLERY,
    method: "POST",
    data: formData,
    config: {headers: {"Content-Type": "multipart/form-data"}},
  }).catch((error) => {
    console.log(error);
  });
};

export const addTrackingApi = (data) => {
  return axios({
    url: API_ENDPOINTS.USER.FLOURISHES.TRACKING,
    method: "POST",
    data: {
      skill_level: data.skill_level,
      video_link: data.video_link,
      what_improved: data.what_improved,
      flourish: data.id,
    },
  }).catch((error) => {
    // TODO
  });
};
