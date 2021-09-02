import 'core-js/stable'
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '3000'
const proxy = process.env.PROXY

if (proxy){
  axios.defaults.baseURL = `http://${proxy}`
}else{
  axios.defaults.baseURL = `http://${host}:${port}/`
}

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})