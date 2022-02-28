import {isEmpty} from '../utils'

// 报文类型
const msgTypeValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return
  }
  const reg = /^[a-z]{3,5}(\.\d{1,3}){3}$/i
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的${rule.fieldChName}`))
  }
}
const msgTypeSchema = {
  opt: {
    // 默认值
    fieldChName: '报文类型',
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
      validator: msgTypeValidator,
      trigger: 'blur'
    })
    return arr
  }
}

export default {
  MSG_Type: msgTypeSchema
}
