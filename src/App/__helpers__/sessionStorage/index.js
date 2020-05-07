const set = (key, value, json = false) => {
  sessionStorage.setItem(key, json ? JSON.stringify(value) : value);
  return true;
};

const get = (item, json = false) => {
  const element = sessionStorage.getItem(item);
  return element ? json ? JSON.parse(element) : element : false;
};

const remove = (item) => {
  sessionStorage.removeItem(item);
  return true;
};

const clear = () => {
  sessionStorage.clear();
  return true;
};

export default {
  set,
  get,
  remove,
  clear,
};
