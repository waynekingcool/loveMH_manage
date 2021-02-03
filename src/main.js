import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'
// 全局css
// import './assets/css/global.css'

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
