import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    job: ''
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
