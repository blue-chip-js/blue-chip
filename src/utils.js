var camelCase = require("lodash.camelcase");

export const lowerCaseFirst = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

export function camelizeKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key])
      }),
      {}
    );
  }
  return obj;
}
