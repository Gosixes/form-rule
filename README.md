## 1、基本概念

验证基于ElementUI中el-form里rules完成，本质原理就是生成原有rules。

内部通过Map将指定的ruleName映射成具体的规则。

```javascript
// 以下为原有使用el-form里的rules验证
rules: {
  username: [
    {required: true, message: '此项必填', trigger: 'blur'}, // rule1
    {validator: xxxValidator, trigger: 'blur'} // rule2
  ]
}
//
```

使用该工具库后，简化为如下书写。本质是通过createRule方法产生上面的el-form要求的rules形式。

```javascript
// 而ruleBundle是指，将固定的验证规则聚合起来
rules: this.$fDcreateRule({
  username: 'userName' // 相当于username这个字段，使用userName的校验规则
})
```



## 2、使用

```javascript
// 在main.js中
import formRule from 'xxx'
Vue.use(formRule)

// 在页面中
rules: this.$fdCreateRule(ruleOption)
```

某些rule可以携带参数（若不设置参数，将使用默认值），书写时以冒号分隔，多个参数用逗号分隔

```javascript
this.$fdCreateRule({
	username: 'userName:3,20'
})
// 如上，userName是个验证用户名的规则，冒号后3和20代表最小输入长度与最大输入长度
```

rule可以使用Object的形式定义
```javascript
this.$fdCreateRule({
    username: {
      rule: 'userName',
      required: false,
      fieldChName: '自定义的名字',
      params: '3,20'
    }
})
// 如上，每个rule都有自己的默认值，当特定项目与默认值不匹配时可以通过此来修改
```
Object定义的形式中：rule为必填，代表使用的规则名称。
required可以覆盖是否必填的默认选项。
fieldChName可以覆盖该字段的中文名称。内部提示语为 请输入xxx,使用此配置可以将xxx换成自定义的内容。
params可以设置该规则的一些参数。

同时支持原有elementui的rule定义方式
```javascript
this.$fdCreateRule({
    username: 'userName',
    password: [
      {required: true, message: '请输入密码'}
    ]
})
// 如上，password的定义是一个数组，此时不做任何处理，即password使用传入的定义方式
```

// 更多规则待添加


## 3、TODO

1、动态表单验证

2、嵌套表单验证

3、自定义rule拓展
