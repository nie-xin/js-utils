function deepClone(obj) {
  if (obj === null || typeof obj != 'object') {
    return object;
  }

  var cloneObj = {};
  for (var key in obj) {
    cloneObj[key] = deepClone(obj[keyt]);
  }

  return cloneObj;
}
