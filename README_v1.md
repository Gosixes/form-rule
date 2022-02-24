## 1、基本概念

验证基于ElementUI中el-form里rules完成，本质原理就是生成原有rules。

基本概念分为以下两种：**rule**与**ruleBundle**

rule对应rule数组里的每一项，

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
rules: this.$createRule({
  username: ['required', 'username'] // 相当于每一项代表一个规则，如‘username’指代上面rule2的位置
})
// 而ruleBundle是指，将固定的验证规则聚合起来
rules: this.$createRule({
  username: 'usernameBundle' // 'usernameBundle'等价于 ['required', 'username']
})
```



## 2、使用

```javascript
// 在main.js中
import formRule form 'xxx'
Vue.use(formRule)

// 在页面中
rules: this.$createRule(ruleOption)
```

某些rule可以携带参数（若不设置参数，将使用默认值），书写时以冒号分隔，多个参数用逗号分隔

```javascript
this.$createRule({
	username: ['required', 'length:3,10']
})
// 如上，length是个验证输入长度的规则，冒号后3和5代表最小输入长度与最大输入长度
```

目前可使用的rule，

| rule     | 名称                         | 参数             |
| -------- | ---------------------------- | ---------------- |
| required | 必填验证（原生，前有红色星） | 无               |
| numeric  | 数字验证                     | 无               |
| length   | 长度验证                     | min: 0，max: 128 |
| username | 用户名验证                   | 无               |

// 更多规则待添加

目前可使用的ruleBundle

// 更多规则待添加

## 3、TODO

1、动态表单验证

2、嵌套表单验证

3、自定义rule拓展