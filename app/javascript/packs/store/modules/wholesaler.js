import axios from 'axios'
export default {
  namespaced: true,
  state: {
    headers: null, //ユーザーtoken
    data: null //data:ユーザー情報
  },
  getters: {
    storeData (state) {
      return state.data
    },
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
      state.data = {
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
      axios
        .post('/api/v1/auth.json', params)
        .then(function (response) {
          context.commit('set_header', response.headers)
          context.commit('set_data', response.data)
        })
    },
    //params:emailなどのユーザー情報
    login(context, params) {
      axios
        .post('/api/v1/auth/sign_in.json', params)
        .then(function (response) {
          context.commit('set_header', response.headers)
          context.commit('set_data', response.data)
        })
    },
    logout(context) {
      axios
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
    },
    //ユーザー情報を更新
    updateProfile(context, params) {
      axios
        .put('/api/v1/auth.json', params, { headers: context.state.headers })
        .then(function (response) {
          context.commit('set_header', response.headers)
          context.commit('set_data', response.data)
        })
        .catch(error => {
          console.error(error)
          if (error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
    },
    
    //ユーザーメールアドレスを更新
    updatePassword(context, params) {
      axios
        .put('/api/v1/auth/password.json', params, { headers: context.state.headers })
        .then(function (response) {
          context.commit('set_header', response.headers)
          context.commit('set_data', response.data)
        })
        .catch(error => {
          console.error(error)
          if (error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
    },
  }
}