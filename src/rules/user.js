import {isEmpty} from '../utils'
import {notBlank} from '../validate'

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

// 登录名
const usernameValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  const paramArr = rule.params.split(',')
  if (paramArr.length !== 2) {
    throw new Error('For username rule, params is invalid')
  }
  paramArr.forEach(item => Number(item))
  const reg = new RegExp(`^[a-zA-Z0-9]{${paramArr[0]},${paramArr[1]}}$`)
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`${rule.fieldChName}为${paramArr[0]}到${paramArr[1]}位数字或字母`))
  }
}
const usernameSchema = {
  opt: {
    fieldChName: '登录名',
    required: true,
    params: '2,20'
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
      params: opt.params,
      fieldChName: opt.fieldChName,
      validator: usernameValidator,
      trigger: 'blur'
    })
    return arr
  }
}

// 用户名称
const nameValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  if (notBlank(value)) {
    callback()
  } else {
    callback(`请输入合法的${rule.fieldChName}`)
  }
}
const nameSchema = {
  opt: {
    fieldChName: '用户名称',
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
      validator: nameValidator,
      trigger: 'blur'
    })
    arr.push({
      max: 15,
      message: `${opt.fieldChName}最多输入15位字符`
    })
    return arr
  }
}

export default {
  USER_Mobile: mobileSchema,
  USER_Username: usernameSchema,
  USER_Name: nameSchema
}
