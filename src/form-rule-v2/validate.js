import {isEmpty} from './utils'

const en = /^[0-9]+$/;
export const validateNumeric = value => {
  if (isEmpty(value)) {
    return true;
  }

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

export const validateZipcode = value => {

}

export const validateUsername = value => {
  if (isEmpty(value)) {
    return true
  }
  const reg = /^[a-zA-Z0-9]{2, 20}$/
  return reg.test(value)
}


export const commonLetterAndNum = value => {
  if (isEmpty(value)) {
    return true
  }
  const reg = /^[a-zA-Z0-9]+$/
  return reg.test(value)
}
