import {isObject, merge} from './utils'
import ruleMap from './rules'

// 获取rule
function getRuleItem(ruleStr) {
  let ruleName = ''
  let params = []
  if (ruleStr.indexOf(':') > -1) {
    const arr = ruleStr.split(':')
    ruleName = arr[0]
    params = arr[1].split(',')
  } else {
    ruleName = ruleStr
  }
  const ruleSchema = ruleMap[ruleName]
  if (!ruleSchema) {
    throw new Error(`No such rule '${ruleName}' exists.`)
  }
  if (ruleSchema.genRuleOpt) {
    const ruleTmp = merge(ruleSchema, ruleSchema.genRuleOpt(params))
    delete ruleTmp.genRuleOpt
    return ruleTmp
  }
  return ruleSchema
}


// 创建el-form的rule
export function createRule(option) {
  console.log(option);
  if (isObject(option)) {
    throw new Error(`Option is not an object`)
  }
  const result = {}
  const keys = Object.keys(option)
  keys.forEach(item => {
    const ruleDef = option[item]
    if (typeof ruleDef === 'string') {
      // 以bundle形式，如 username: 'usernameBundle'
      // result[item] = fieldBundle[ruleDef]
    } else {
      // 单独如 username: ['required', 'usernameRule']
      const arr = []
      option[item].forEach(ruleItem => {
        arr.push(getRuleItem(ruleItem))
      })
      result[item] = arr
    }
  })
  return result
}

// register rule


// 注册vue插件，绑定到vue原型
// 使用：this.$createFormRule(options)
export default {
  install(Vue, options) {
    Vue.prototype.$createRule = createRule
  }
}
