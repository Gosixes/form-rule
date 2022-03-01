import {isEmpty} from '../utils'

// 11位手机号
const mobileValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  const reg = /^1[3-9]\d{9}$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的${rule.fieldChName}`))
  }
}
const mobileSchema = {
  opt: {
    // 默认值
    fieldChName: '手机号',
    required: true,
    params: undefined
  },
  genRule: function (opt) {
    const arr = []
    if (opt.required === true) {
      arr.push({
        required: true,
        message: `请输入${opt.fieldChName}`,
        trigger: 'blur'
      })
    }
    arr.push({
      fieldChName: opt.fieldChName,
      validator: mobileValidator,
      trigger: 'blur'
    })
    return arr
  }
}

// ipv4地址
const ipv4Validator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  const reg = /^((1?[1-9]?\d|[1-2][0-4]\d|25[0-5])\.){3}(1?[1-9]?\d|[1-2][0-4]\d|25[0-5])$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的${rule.fieldChName}`))
  }
}
const ipv4Schema = {
  opt: {
    // 默认值
    fieldChName: 'IPV4地址',
    required: false,
    params: undefined
  },
  genRule: function (opt) {
    const arr = []
    if (opt.required === true) {
      arr.push({
        required: true,
        message: `请输入${opt.fieldChName}`,
        trigger: 'blur'
      })
    }
    arr.push({
      fieldChName: opt.fieldChName,
      validator: ipv4Validator,
      trigger: 'blur'
    })
    return arr
  }
}

export default {
  mobile: mobileSchema,
  ipv4: ipv4Schema
}
