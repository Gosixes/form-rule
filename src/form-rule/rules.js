import {validateNumeric, validateUsername} from './validate'

const numericValidator = (rule, value, callback) => {
  if (validateNumeric(value)) {
    callback()
  } else {
    callback(new Error('输入不是数字'))
  }
}
const usernameValidator = (rule, value, callback) => {
  if (validateUsername(value)) {
    callback()
  } else {
    callback(new Error('用户名为2-20位数字或字母'))
  }
}

// rule 定义
const requiredRuleSchema = {
  required: true, message: '必填项，不能为空', trigger: 'blur'
}
const numericRuleSchema = {
  validator: numericValidator, trigger: 'blur'
}
const lengthRuleSchema = {
  min: 0,
  max: 128,
  message: '输入长度在0-128之间',
  trigger: 'blur',
  genRuleOpt: function (params) {
    return {
      min: parseInt(params[0]),
      max: parseInt(params[1]),
      message: `输入长度在${params[0]}-${params[1]}之间`
    }
  }
}
const usernameRuleSchema = {
  validator: usernameValidator,
  trigger: 'blur'
}


const ruleMap = {
  required: requiredRuleSchema,
  numeric: numericRuleSchema,
  length: lengthRuleSchema,
  username: usernameRuleSchema
}

// 聚合rule，需要根据需求整理
// 可以整合基本rule，也可以单独写校验规则
const bundleRulesMap = {
  // bankRules: [
  //   requiredRule, numericRule
  // ]
}

export default ruleMap
