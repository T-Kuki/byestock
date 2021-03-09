import Vue from 'vue'
import App from '../app.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store.js'
import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'
import * as ActiveStorage from '@rails/activestorage'
import 'channels'
import {ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import Paginate from 'vuejs-paginate'

Rails.start()
Turbolinks.start()
ActiveStorage.start()
Vue.use(axios)
Vue.use(Vuex)
Vue.component('Paginate', Paginate)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
extend('required', {
  ...required,
  message: '入力必須です。'
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    components: {
      ValidationProvider
    },
    render: h => h(App)
  }).$mount()

  document.body.appendChild(app.$el)
})