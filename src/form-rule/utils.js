export function getSingleParam(params, paramName) {
  return Array.isArray(params) ? params[0] : params[paramName];
}

export function isEmpty(value) {
  if (value === null || value === undefined || value === '') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  return false;
}

export function isNotEmpty(value) {
  return !isEmpty(value)
}

export function isObject(obj) {
  obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj)
}

export function isNaN(value) {
  return value !== value
}

export function merge(target, source) {
  Object.keys(source).forEach(key => {
    if (isObject(source[key])) {
      if (!target[key]) {
        target[key] = {};
      }

      merge(target[key], source[key]);
      return;
    }

    target[key] = source[key];
  });

  return target;
}
