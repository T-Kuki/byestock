import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    key: 'byestock',
    storage: window.sessionStorage
  })],

  state: {
    headers: null,
    //data:ユーザー情報
    data: null
  },

  mutations: {
    //サインイン時のレスポンスヘッダから情報を抜き出して保存
    set_header(state, payload) {
      state.headers = {
        'access-token': payload['access-token'],
        'client': payload['client'],
        'uid': payload['uid'],
      }
    },
    // ユーザーのmail情報を抜き出して保存
    set_data(state, payload){
      state.data ={
        'id': payload.data['id'],
        'email': payload.data['email'],
        'name': payload.data['name'],
        'avatar': payload.data['avatar']
      }
    },

    //サインアウトしたらヘッダを空にしておく。
    signOut(state) {
      state.headers = null
      state.data = null
    },
  },

  actions: {
    signUp(context, params) {
      this.axios
        .post('/api/v1/auth.json', params)
        .then(function (response) {
          context.commit('set_header', response.headers)
          context.commit('set_data', response.data)
        })
    },
    //paramsはemailなどのユーザー情報が入る
    signIn(context, params) {
      this.axios
        .post('/api/v1/auth/sign_in.json', params)
        .then(function (response) {
          context.commit('set_header', response.headers)
          context.commit('set_data', response.data)
        })
    },
    signOut(context) {
      this.axios
        .delete('/api/v1/auth/sign_out.json', { headers: context.state.headers })
        .then(function () {
          context.commit('signOut')
        })
        .catch(error => {
          console.error(error)
          if (error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
    }
  },
})

export default store