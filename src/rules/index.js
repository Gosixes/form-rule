import OrgRuleMap from './org'
import UserRuleMap from './user'
import MsgRuleMap from './msg'
import CommonRuleMap from './common'

export default {
  ...OrgRuleMap,
  ...UserRuleMap,
  ...MsgRuleMap,
  ...CommonRuleMap
}
