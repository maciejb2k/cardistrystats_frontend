export const trim = (value) => {
  return value && value.trim();
};

export const toLowerCase = (value) => {
  return value && value.toLowerCase();
};

export const toUpperCase = (value) => {
  return value && value.toUpperCase();
};

export const normalizePhone = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
};
