import {commonLetterAndNum} from '../validate'
import {isEmpty} from '../utils'

// 机构编码规则
const orgCodeValidator = (rule, value, callback) => {
  if (commonLetterAndNum(value)) {
    callback()
  } else {
    callback(new Error(`${rule.fieldChName}由数字和字母组成`))
  }
}
const orgCodeSchema = {
  opt: {
    // 默认值
    fieldChName: '机构编码',
    required: true,
    params: '35'
  },
  genRule: function (opt) {
    const arr = []
    const param1 = Number(opt.params)
    if (opt.required === true) {
      arr.push({
        required: true,
        message: `请输入${opt.fieldChName}`,
        trigger: 'blur'
      })
    }
    arr.push({
      fieldChName: opt.fieldChName,
      validator: orgCodeValidator,
      trigger: 'blur'
    })
    arr.push({
      max: param1,
      message: `${opt.fieldChName}最多输入${param1}位字符`
    })
    return arr
  }
}

// LEI编码规则
const leiCodeValidator = (rule, value, callback) => {
  if (commonLetterAndNum(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的{LEI编码}${rule.fieldChName}`))
  }
}
const leiCodeSchema = {
  opt: {
    // 默认值
    fieldChName: 'LEI编码',
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
      validator: leiCodeValidator,
      trigger: 'blur'
    })
    arr.push({
      max: param1,
      message: `${opt.fieldChName}最多输入${param1}位字符`
    })
    return arr
  }
}

// 中文名称
const chNameValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return true
  }
  const reg = /^[\u4E00-\u9FA5a-z0-9()\s（）\[\]【】+-—_,]+$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的${opt.fieldChName}`))
  }
}
const chNameSchema = {
  opt: {
    // 默认值
    fieldChName: '中文名称',
    required: false,
    params: '140'
  },
  genRule: function (opt) {
    const arr = []
    const param1 = Number(opt.params)
    if (opt.required === true) {
      arr.push({
        required: true,
        message: `请输入${opt.fieldChName}`,
        trigger: 'blur'
      })
    }
    arr.push({
      fieldChName: opt.fieldChName,
      validator: chNameValidator,
      trigger: 'blur'
    })
    arr.push({
      max: param1,
      message: `${opt.fieldChName}最多输入${param1}位字符`
    })
    return arr
  }
}


// 英文名称
const enNameValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    return true
  }
  const reg = /^[a-z0-9()\s\[\]+-_,]+$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(`请输入正确的${opt.fieldChName}`))
  }
}
const enNameSchema = {
  opt: {
    // 默认值
    fieldChName: '英文名称',
    required: false,
    params: '140'
  },
  genRule: function (opt) {
    const arr = []
    const param1 = Number(opt.params)
    if (opt.required === true) {
      arr.push({
        required: true,
        message: `请输入${opt.fieldChName}`,
        trigger: 'blur'
      })
    }
    arr.push({
      fieldChName: opt.fieldChName,
      validator: enNameValidator,
      trigger: 'blur'
    })
    arr.push({
      max: param1,
      message: `${opt.fieldChName}最多输入${param1}位字符`
    })
    return arr
  }
}


export default {
  ORG_OrgCode: orgCodeSchema,
  ORG_LeiCode: leiCodeSchema,
  ORG_ChName: chNameSchema,
  ORG_EnName: enNameSchema,
}
