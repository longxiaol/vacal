import Vue from 'vue'
import Router from 'vue-router'

const Home =r=>require.ensure([],()=>r(require('@/pages/Home.vue')), 'Home')
const Class =r=>require.ensure([],()=>r(require('@/pages/Class.vue')), 'Class')
const Custom=r=>require.ensure([],()=>r(require('@/pages/Custom.vue')),'Custom')
const Mine =r=>require.ensure([],()=>r(require('@/pages/Mine.vue')), 'Mine')
const Login =r=>require.ensure([],()=>r(require('@/pages/Login.vue')), 'Login')
const Register =r=>require.ensure([],()=>r(require('@/pages/Register.vue')), 'Register')
const Goodshow =r=>require.ensure([],()=>r(require('@/pages/Goodshow.vue')), 'Goodshow')
const Details =r=>require.ensure([],()=>r(require('@/pages/Details.vue')), 'Details')
const Cart =r=>require.ensure([],()=>r(require('@/pages/Cart.vue')), 'Cart')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
    	path: '/class',
      name: 'class',
      component: Class
    },   
    {
    	path: '/custom',
      name: 'custom',
      component: Custom
    },   
    {
    	path: '/mine',
      name: 'mine',
      component: Mine
    },   
    {
    	path: '/login',
      name: 'login',
      component: Login
    },   
    {
    	path: '/register',
      name: 'register',
      component: Register
    },
    {
    	path: '/goodshow/:id',
      name: 'goodshow',
      component: Goodshow
    },
    {
    	path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
    	path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
    	path:'/',
    	redirect:'/home'
    }
  ]
})
