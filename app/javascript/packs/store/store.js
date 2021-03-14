/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import wholesaler from './modules/wholesaler'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    key: 'byestock',
    storage: window.sessionStorage
  })],
  modules: {
    wholesaler,
  },
})

export default store