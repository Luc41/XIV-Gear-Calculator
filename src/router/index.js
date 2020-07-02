import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Bard',
    name: 'Bard',
    component: () => import('../views/Container.vue')
  },
  {
    path: '/Machinist',
    name: 'Machinist',
    component: () => import('../views/Container.vue')
  },
  {
    path: '/Dancer',
    name: 'Dancer',
    component: () => import('../views/Container.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
