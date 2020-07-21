import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
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
  },
  {
    path: '/Paladin',
    name: 'Paladin',
    component: () => import('../views/Container.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Main') {
    store.commit('updateSessionStorage', {
      name: 'selectedJob',
      val: to.name
    })
    next()
  } else {
    next()
  }
})

export default router
