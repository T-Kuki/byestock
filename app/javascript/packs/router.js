import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/site/home'
import Login from './pages/wholesaler/login.vue'
import ShopLogin from './pages/shopUser/login.vue'
import Store from './store/store.js'
//import SignOut from './components/signOut'

Vue.use(VueRouter)

const routes= [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shop_login',
    name: 'shopLogin',
    component: ShopLogin
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.data) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router