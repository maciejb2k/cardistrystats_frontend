export const getUrlParams = (params) => {
  const obj = {};

  if (params) {
    params.substring(1).split("&").forEach((param) => {
      const pair = param.split("=");
      obj[pair[0]] = pair[1];
    });
  }

  return obj;
};

export const createTableParams = (obj) => {
  const tableParams = {};

  if (obj.hasOwnProperty("ordering")) {
    tableParams.ordering = obj.ordering;
  }

  if (obj.hasOwnProperty("search")) {
    tableParams.search = obj.search;
  }

  if (obj.hasOwnProperty("page")) {
    tableParams.page = obj.page;
  }

  return tableParams;
};

export const replaceIdParam = (url, id) => url.replace(":id", id);
