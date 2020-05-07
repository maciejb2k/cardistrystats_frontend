const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const maxLength = (max) => (value) => {
  return value && value.length > max ? `Must be ${max} characters or less` : undefined;
};

const minLength = (min) => (value) => {
  return value && value.length < min ? `Must be at least ${min} characters or more` : undefined;
};

export const maxLength64 = maxLength(64);
export const maxLength254 = maxLength(254);
export const minLength4 = minLength(4);

export const required = (value) => {
  return value ? undefined : "Required field";
};

export const email = (value) => {
  return value && emailRegEx.test(value) ? undefined : "Invalid email address";
};

export const userName = (value) => {
  return value && /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(value) ? undefined : "Invalid username";
};
