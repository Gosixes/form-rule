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

// 邮编
const zipCodeValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  const reg = /^[1-9]\d{5}$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的${rule.fieldChName}`))
  }
}
const zipCodeSchema = {
  opt: {
    // 默认值
    fieldChName: '邮编',
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
      validator: zipCodeValidator,
      trigger: 'blur'
    })
    return arr
  }
}

// 唯一id
const idenIdValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  const reg = new RegExp(`^[0-9a-zA-Z\\-_]{1, ${rule.params}}$`)
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`${rule.fieldChName}为1-${rule.params}位数字、字母，支持-_`))
  }
}
const idenIdSchema = {
  opt: {
    fieldChName: '唯一ID',
    required: false,
    params: '32'
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
    const params = Number(opt.params)
    arr.push({
      fieldChName: opt.fieldChName,
      params: params,
      validator: idenIdValidator,
      trigger: 'blur'
    })
    return arr
  }
}

// 服务器端口
const serverPortSchema = {
  opt: {
    fieldChName: '端口',
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
    const params = Number(opt.params)
    arr.push({
      fieldChName: opt.fieldChName,
      params: params,
      validator: idenIdValidator,
      trigger: 'blur'
    })
    return arr
  }
}

export default {
  mobile: mobileSchema,
  ipv4: ipv4Schema,
  zipcode: zipCodeSchema,
  idenId: idenIdSchema
}
