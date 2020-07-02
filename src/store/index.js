import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    job: '',
    raciesStorage: null,
    clansStorage: null
  },
  mutations: {
    changejob (state, desc) {
      state.job = desc
    }
  },
  actions: {
  },
  modules: {
  }
})
