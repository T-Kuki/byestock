import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store/store.js'
import Home from './pages/site/home'
import Login from './pages/wholesaler/loginPage.vue'
import ContractorLogin from './pages/contractor/loginPage.vue'
import WholesalerMypage from './pages/wholesaler/mypage.vue'

//import SignOut from './components/signOut'

Vue.use(VueRouter)

const routes= [
  {
    path: 'wholesaler/login',
    name: 'wholesalerLogin',
    component: Login
  },
  {
    path: 'contractor/login',
    name: 'contractorLogin',
    component: ContractorLogin
  },
  { 
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        name: 'floors',
        path: '/floors',
        component: Home
      },
      {
        name: 'doors',
        path: '/doors',
        component: Home
      }, {
        name: 'features',
        path: '/features',
        component: Home
      }, {
        name: 'wetareas',
        path: '/wetareas',
        component: Home
      }, {
        name: 'others',
        path: '/others',
        component: Home
      },
    ]
  },
  {
    path: 'wholesaler/mypage/',
    name: 'wholesalerMypage',
    component: WholesalerMypage,
    children: [
      {
        path: '/items',
        name: 'wholesalerMypage',
        component: WholesalerMypage
      },
      {
        path: '/received_order',
        name: 'wholesalerMypage',
        component: WholesalerMypage
      },
      {
        path: '/profile',
        name: 'wholesalerMypage',
        component: WholesalerMypage
      },
      {
        path: '/email',
        name: 'wholesalerMypage',
        component: WholesalerMypage
      },
      {
        path: '/password',
        name: 'wholesalerMypage',
        component: WholesalerMypage
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.data) {
    next({ name: 'wholesalerLogin', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router