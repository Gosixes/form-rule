import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入form-rule
import formRule from '../../src/index'
Vue.use(formRule)

new Vue({
  render: h => h(App),
}).$mount('#app')
