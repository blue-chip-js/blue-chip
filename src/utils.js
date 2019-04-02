export const lowerCaseFirst = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}
