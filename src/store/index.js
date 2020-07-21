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
    selectedJob: sessionStorage.getItem('selectedJob'),
    patch: null,
    submitedQuery: {},
    raciesStorage: JSON.parse(sessionStorage.getItem('raciesStorage')),
    clansStorage: JSON.parse(sessionStorage.getItem('clansStorage')),
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
    },
    statsCategory: {
      primarycommon: [
        { index: 1, ID: 7, name: 'HP' },
        { index: 2, ID: 3, name: 'Vitality' }
      ],
      common: [
        { index: 9, ID: 22, name: 'Direct Hit Rate' },
        { index: 10, ID: 27, name: 'Critical Hit' },
        { index: 11, ID: 44, name: 'Determination' }
      ],
      tank: [
        { index: 3, ID: 1, name: 'Strength' },
        { index: 4, ID: 19, name: 'Tenacity' },
        { index: 12, ID: 45, name: 'Skill Speed' }
      ],
      healer: [
        { index: 5, ID: 5, name: 'Mind' },
        { index: 6, ID: 6, name: 'Piety' },
        { index: 13, ID: 46, name: 'Spell Speed' }
      ],
      rangedps: [
        { index: 7, ID: 2, name: 'Dexterity' },
        { index: 12, ID: 45, name: 'Skill Speed' }
      ],
      meleedps: [
        { index: 3, ID: 1, name: 'Strength' },
        { index: 12, ID: 45, name: 'Skill Speed' }
      ],
      magic: [
        { index: 8, ID: 4, name: 'Intelligence' },
        { index: 13, ID: 45, name: 'Spell Speed' }
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
    currentJobStats: state => {
      var arr = state.statsCategory.primarycommon
      switch (state.selectedJob) {
        case 'Paladin':
        case 'Warrior':
        case 'Darkknight':
        case 'Gunbreaker':
          arr = arr.concat(state.statsCategory.tank)
          break

        case 'Whitemage':
        case 'Scholar':
        case 'Astrologian':
          arr = arr.concat(state.statsCategory.healer)
          break

        case 'Bard':
        case 'Machinist':
        case 'Dancer':
        case 'Ninja':
          arr = arr.concat(state.statsCategory.rangedps)
          break
        case 'Monk':
        case 'Dragoon':
        case 'Samurai':
          arr = arr.concat(state.statsCategory.meleedps)
          break

        case 'Blackmage':
        case 'Summoner':
        case 'Redmage':
          arr = arr.concat(state.statsCategory.magic)
          break

        default:
          break
      }
      arr = arr.concat(state.statsCategory.common)
      return arr.sort((a, b) => a.index - b.index)
    }
  },
  actions: {
  },
  modules: {
  }
})
