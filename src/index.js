import {isArray, isObject, merge} from './utils'
import ruleMap from './rules/index.js'

function getRuleItemFromObj(ruleObj) {
  const ruleSchema = ruleMap[ruleObj.rule]
  if (!ruleSchema) {
    throw new Error(`No such rule '${ruleName}' exists.`)
  }
  const finalOpt = merge(ruleSchema.opt, ruleObj)
  return ruleSchema.genRule(finalOpt)
}

// 创建el-form的rule
export function createRule(option) {
  if (!isObject(option)) {
    throw new Error(`Option is not an object`)
  }
  const result = {}
  const keys = Object.keys(option)
  keys.forEach(item => {
    const ruleDef = option[item]
    let ruleOpt = null
    if (typeof ruleDef === 'string') {
      // 以bundle形式，如 username: 'usernameBundle'
      if (ruleDef.indexOf(':') > -1) {
        const arr = ruleDef.split(':')
        ruleOpt = {
          rule: ruleDef[0],
          params: ruleDef[1]
        }
      } else {
        ruleOpt = {
          rule: ruleDef
        }
      }
      result[item] = getRuleItemFromObj(ruleOpt)
    } else if (isObject(ruleDef)) {
      result[item] = getRuleItemFromObj(ruleDef)
    } else if (isArray(ruleDef)) {
      result[item] = ruleDef
    } else {
      throw new Error('Rule definition format is incorrect.')
    }
  })
  return result
}

// register rule

// 注册vue插件，绑定到vue原型
// 使用：this.$fdCreateRule(options)
export default {
  install(Vue, options) {
    Vue.prototype.$fdCreateRule = createRule
  }
}


/*
* {username: 'userRule'}
*
* 'userRule:params'
*
* {username: {
*   rule: 'userRule',
*   fieldChName: '自定义用户名',
*   required: true|false,
*   params: '' // 多个参数逗号分隔
* }}
*
* */
