import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Main from '../views/Main.vue'
// import { loadColumns } from '../utils/common'
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
      // {
      //   path: '',
      //   component: () => import('../components/containerHome.vue')
      // },
      {
        path: ':job',
        component: () => import('../components/panel.vue')
      }
    ]
  }
  // {
  //   path: '/Bard',
  //   name: 'Bard',
  //   component: () => import('../views/Container.vue')
  // },
  // {
  //   path: '/Machinist',
  //   name: 'Machinist',
  //   component: () => import('../views/Container.vue')
  // },
  // {
  //   path: '/Dancer',
  //   name: 'Dancer',
  //   component: () => import('../views/Container.vue')
  // },
  // {
  //   path: '/Paladin',
  //   name: 'Paladin',
  //   component: () => import('../views/Container.vue')
  // },
  // {
  //   path: '/Blackmage',
  //   name: 'Blackmage',
  //   component: () => import('../views/Container.vue')
  // },
  // {
  //   path: '/Whitemage',
  //   name: 'Whitemage',
  //   component: () => import('../views/Container.vue')
  // }
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
    // store.commit('updateSessionStorage', {
    //   name: 'selectedJob',
    //   val: to.name
    // })
    // load columns before goto next
    // var columns = loadColumns()
    // store.commit('updateSessionStorage', {
    //   name: 'columns',
    //   val: JSON.stringify(columns)
    // })
    next()
  } else {
    next()
  }
})

export default router
