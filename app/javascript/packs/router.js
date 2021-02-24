import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './pages/user/login.vue'
//import SignOut from './components/signOut'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth/sign_in',
      name: 'signIn',
      component: Login
    },
    //{
    //  path: '/auth/sign_out',
    //  name: 'signOut',
    //  component: SignOut
    //},
  ]
})