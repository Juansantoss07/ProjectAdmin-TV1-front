import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('../views/Home.vue')
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('../views/Live.vue')
    },
    {
      path: '/recoverpassword',
      name: 'recoverpassword',
      component: () => import('../views/RecoverPassword.vue')
    },
    {
      path: '/adminproject',
      name: 'recoverpassword',
      component: () => import('../views/LoginAdmin.vue')
    },
    {
      path: '/dashboard',
      name: 'recoverpassword',
      component: () => import('../views/HomeAdmin.vue')
    }
  ]
})

export default router
