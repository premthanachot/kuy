import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/product.vue')
  },
  {
    path: '/sucess',
    name: 'Sucess',
    component: () => import('../views/sucess.vue')
  },
  {
    path: '/Stories',
    name: 'Storiest',
    component: () => import('../views/Stories.vue')
  },
  {
    path: '/abouts',
    name: 'abouts',
    component: () => import('../views/abouts.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
