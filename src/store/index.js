import Vue from 'vue'
import Vuex from 'vuex'
import {
  updateSessionStorage,
  updatePatch,
  switchDatabase,
  submitQuery
} from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patch: null,
    submitedQuery: {},
    database: true
  },
  mutations: {
    [updateSessionStorage] (state, payload) {
      sessionStorage.setItem(payload.name, payload.val)
      switch (payload.name) {
        case 'selectedJob':
          state[payload.name] = sessionStorage.getItem(payload.name)
          break

        case 'raciesStorage':
        case 'clansStorage':
        case 'itemsStorage':
        case 'baseParamsStorage':
        case 'columns':
          state[payload.name] = JSON.parse(sessionStorage.getItem(payload.name))
          break

        default:
          break
      }
    },
    [submitQuery] (state, payload) {
      // state.submitedQuery.classjob = sessionStorage.getItem('selectedJob')
      payload.forEach(index => {
        Vue.set(state.submitedQuery, index.name, index.val)
      })
    },
    [updatePatch] (state, payload) {
      state.patch = payload.reverse()[0]
    },
    [switchDatabase] (state) {
      state.database = !state.database
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
