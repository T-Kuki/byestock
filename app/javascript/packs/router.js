import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store/store.js'
import Home from './pages/site/home'
import Login from './pages/wholesaler/loginPage.vue'
import ContractorLogin from './pages/contractor/loginPage.vue'
import WholesalerMypage from './pages/wholesaler/mypage.vue'
import ContractorMypage from './pages/contractor/mypage.vue'
import ItemMgmt from './components/organsms/wholesaler/itemMgmt'
import OrdersMgmt from './components/organsms/contractor/ordersMgmt'
import ReceivedOrder from './components/organsms/wholesaler/receivedOrderMgmt'
import Profile from './components/organsms/wholesaler/profileMgmt'
import Email from './components/organsms/wholesaler/emailMgmt'
import Password from './components/organsms/wholesaler/passwordMgmt'
import ContractorProfile from './components/organsms/contractor/profileMgmt'
import ContractorEmail from './components/organsms/contractor/emailMgmt'
import ContractorPassword from './components/organsms/contractor/passwordMgmt'
import NewItem from './components/organsms/wholesaler/newItem'
import EditItem from './components/organsms/wholesaler/editItem'

//import SignOut from './components/signOut'

Vue.use(VueRouter)

const routes= [
  {
    path: '/wholesaler/login',
    name: 'wholesalerLogin',
    component: Login
  },
  {
    path: '/contractor/login',
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
        path: '/floors',
        name: 'floors',
        component: Home
      },
      {
        path: '/doors',
        name: 'doors',
        component: Home
      }, {
        path: '/features',
        name: 'features',
        component: Home
      }, {
        path: '/wetareas',
        name: 'wetareas',
        component: Home
      }, {
        path: '/others',
        name: 'others',
        component: Home
      },
    ]
  },
  {
    path: '/wholesaler/mypage',
    name: 'wholesalerMypage',
    component: WholesalerMypage,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'items',
        name: 'items',
        component: ItemMgmt,
      },
      {
        path: 'items/new',
        name: 'newItem',
        component: NewItem,
      },
      {
        path: 'items/:itemId/edit',
        name: 'editItem',
        component: EditItem,
      },
      {
        path: 'received_order',
        name: 'receivedOrder',
        component: ReceivedOrder
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'email',
        name: 'email',
        component: Email
      },
      {
        path: 'password',
        name: 'password',
        component: Password
      },
    ]
  },
  {
    path: '/contractor/mypage',
    name: 'contractorMypage',
    component: ContractorMypage,
    children: [
      {
        path: 'orders',
        name: 'orders',
        component: OrdersMgmt,
      },
      {
        path: 'profile',
        name: 'contractorProfile',
        component: ContractorProfile
      },
      {
        path: 'email',
        name: 'contractorEmail',
        component: ContractorEmail
      },
      {
        path: 'password',
        name: 'contractorPassword',
        component: ContractorPassword
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
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.wholesaler.headers) {
    console.log('ストアのヘッダー: '+Store.state.wholesaler.headers)
    next({ name: 'wholesalerLogin', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router