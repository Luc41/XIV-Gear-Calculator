import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Main from '../views/Main.vue'
import { loadColumns } from '../utils/common'
// import dynamicRoutes from './dynamicRoutes'
// import { classJobCategory } from '../utils/data'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/c',
    name: 'Container',
    component: () => import('../views/Container.vue'),
    children: [
      {
        path: ':job',
        name: 'Panel',
        component: () => import('../components/panel.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.addRoutes(dynamicRoutes(classJobCategory))

router.beforeEach((to, from, next) => {
  // clear itemsStorage before goto next
  store.commit('updateSessionStorage', {
    name: 'itemsStorage',
    val: null
  })
  // load job from route name
  if (to.name !== 'Main') {
    store.commit('updateSessionStorage', {
      name: 'selectedJob',
      val: to.params.job
    })
    // load columns before goto next
    var columns = loadColumns(to.params.job)
    store.commit('updateSessionStorage', {
      name: 'columns',
      val: JSON.stringify(columns)
    })
    next()
  } else {
    next()
  }
})

export default router
