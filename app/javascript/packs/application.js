// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import Vue from 'vue'
import App from '../app.vue'
import router from './router'
import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'
import * as ActiveStorage from '@rails/activestorage'
import 'channels'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

Rails.start()
Turbolinks.start()
ActiveStorage.start()
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
//vee-validateの設定
extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
//vee-validateの設定ここまで

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')