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
    database: true,
    equipSlotCategory: {
      primary: [
        { id: 1, name: 'MainHand' }
      ],
      secondary: [
        { id: 2, name: 'OffHand' }
      ],
      armor: [
        { id: 3, name: 'Head' },
        { id: 4, name: 'Body' },
        { id: 5, name: 'Gloves' },
        { id: 6, name: 'Waist' },
        { id: 7, name: 'Legs' },
        { id: 8, name: 'Feet' }
      ],
      accessories: [
        { id: 9, name: 'Ears' },
        { id: 10, name: 'Neck' },
        { id: 11, name: 'Wrists' },
        { id: 12, name: 'FingerL' },
        { id: 13, name: 'FingerR' }
      ],
      food: [
        { id: 14, name: 'Food' }
      ]
    }
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
        case 'columns':
          state[payload.name] = JSON.parse(sessionStorage.getItem(payload.name))
          break

        default:
          break
      }
    },
    [submitQuery] (state, payload) {
      state.submitedQuery.classjob = sessionStorage.getItem('selectedJob')
      Vue.set(state.submitedQuery, payload.name, payload.val)
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
