import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    job: sessionStorage.getItem('selectedJob'),
    patch: null,
    raciesStorage: null,
    clansStorage: null,
    charStatus: [],
    errorMessage: {},
    database: true
  },
  mutations: {
    updateStorage (state, val) {
      switch (typeof val) {
        case 'string':
          sessionStorage.setItem('selectedJob', val)
          state.job = sessionStorage.getItem('selectedJob')
          break

        case 'object':
          sessionStorage.setItem('raciesStorage', val.Race)
          state.raciesStorage = sessionStorage.getItem('raciesStorage')

          sessionStorage.setItem('clansStorage', val.Tribe)
          state.clansStorage = sessionStorage.getItem('clansStorage')
          break

        default:
          break
      }
    },
    errorMessage (state, val) {
      state.errorMessage = val
    },
    swtichDatabase (state) {
      state.database = !state.database
    }
  },
  actions: {
  },
  modules: {
  }
})
