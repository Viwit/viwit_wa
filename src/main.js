import 'core-js/stable'
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

axios.defaults.baseURL = 'http://54.174.205.83:3000/'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

router.beforeEach((to, from, next) => {
  if(to.fullPath == "/register" || to.fullPath == "/login"){
    next()
  }else{
    axios
      .post('graphql', {
        query:
          `mutation{put_token(id: ${store.state.user_id}, token: "${store.state.token}"){isValid }}`,
      })
      .then((res) => {
        if(res.data.data.put_token.isValid){
          next()
        }else{
          next('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
})

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
