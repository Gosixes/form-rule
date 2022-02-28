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
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isArray(obj) {
  return Array.isArray(obj)
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

export function isStartEndSpace(value) {
  if (value === null || value === undefined) return false
  return !value.trim().length === value.length
}
