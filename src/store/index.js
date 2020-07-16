import Vue from 'vue'
import Vuex from 'vuex'
import { updateSessionStorage, updatePatch, switchDatabase, submitQuery } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedJob: sessionStorage.getItem('selectedJob'),
    patch: null,
    submitedQuery: {},
    raciesStorage: JSON.parse(sessionStorage.getItem('raciesStorage')),
    clansStorage: JSON.parse(sessionStorage.getItem('clansStorage')),
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
          state[payload.name] = JSON.parse(sessionStorage.getItem(payload.name))
          break

        default:
          break
      }
    },
    [submitQuery] (state, payload) {
      Vue.set(state.submitedQuery, payload.name, payload.val)
    },
    [updatePatch] (state, payload) {
      state.patch = payload.reverse()[0]
    },
    [switchDatabase] (state) {
      state.database = !state.database
    }
  },
  actions: {
  },
  modules: {
  }
})
