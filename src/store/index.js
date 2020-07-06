import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    job: sessionStorage.getItem('selectedJob'),
    patch: [],
    raciesStorage: null,
    clansStorage: null,
    charStatus: [],
    loadingState: false
  },
  mutations: {
    changejob (state, value) {
      sessionStorage.setItem('selectedJob', value)
      state.job = sessionStorage.getItem('selectedJob')
    },
    changeLoadingState (state) {
      state.loadingState = !state.loadingState
    }
  },
  actions: {
  },
  modules: {
  }
})
