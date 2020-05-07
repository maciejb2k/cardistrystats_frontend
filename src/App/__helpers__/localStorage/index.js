const set = (key, value, json = false) => {
  localStorage.setItem(key, json ? JSON.stringify(value) : value);
  return true;
};

const get = (item, json = false) => {
  const element = localStorage.getItem(item);
  return element ? json ? JSON.parse(element) : element : false;
};

const remove = (item) => {
  localStorage.removeItem(item);
  return true;
};

const clear = () => {
  localStorage.clear();
  return true;
};

export default {
  set,
  get,
  remove,
  clear,
};
