import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'
// utils
import { isEmpty } from './utils/wbUtils.js'

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
// 头部添加token
axios.interceptors.request.use(config => {
  const token = window.sessionStorage.getItem('token')
  if (!isEmpty(token)) {
    // 不为空则添加token
    config.headers.Authorization = token
    console.log('xxxxxx');
    
  }else {
    console.log('yyyyy');
    
  }
  // config.headers.Authorization = token
  return config
})

Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
