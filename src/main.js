import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element)

import formRule from '@/form-rule-v2/index'
Vue.use(formRule)

new Vue({
  render: h => h(App),
}).$mount('#app')
