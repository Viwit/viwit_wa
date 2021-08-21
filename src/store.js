import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios';
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  token: 'null',
  user_id: 0
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  updateToken(state, token){
    state.token = token
  },
  updateUser(state, user_id){
    state.user_id = user_id
  }
}

export default new Vuex.Store({
  state,
  mutations,
  plugins: [vuexLocal.plugin]
})