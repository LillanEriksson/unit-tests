export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;
  //typeof
  if (type === 'string') {
    return stringArrayOrObject === '';
  } else if (type === 'object') {
    if (Array.isArray(stringArrayOrObject))
      return stringArrayOrObject.length === 0;
    else return Object.entries(stringArrayOrObject).length === 0;
  } else {
    return false;
  }
};
