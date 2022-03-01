import {isEmpty} from './utils'

const en = /^[0-9]+$/;
export const validateNumeric = value => {
  const testValue = val => {
    const strValue = String(val);
    return en.test(strValue);
  }

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
}

export const validateEmail = value => {
  if (isEmpty(value)) {
    return true;
  }
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (Array.isArray(value)) {
    return value.every(val => re.test(String(val)));
  }

  return re.test(String(value));
}

// 常用字母和数字
export const commonLetterAndNum = (value, length = '+') => {
  const reg = RegExp(`^[a-zA-Z0-9]${length}$`)
  return reg.test(value)
}

// not blank
export const notBlank = value => {
  if (value.trim().length === 0) {
    return false
  }
  return true
}

export const notBlankValidator = (rule, value, callback) => {
  if (value === null || value === undefined) {
    return callback(new Error(''))
  }
  if (notBlank(value)) {
    callback()
  } else {
    callback(new Error(''))
  }
}
