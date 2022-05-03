import { createRouter, createWebHistory } from 'vue-router'
import Guard from '../services/middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      beforeEnter: Guard.auth
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('../views/Live.vue'),
      beforeEnter: Guard.auth
    },
    {
      path: '/recoverpassword',
      name: 'recoverpassword',
      component: () => import('../views/RecoverPassword.vue')
    }
  ]
})

export default router
