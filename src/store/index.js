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
    equipSlotCategory: [
      { id: 1, name: 'MainHand' },
      { id: 2, name: 'OffHand' },
      { id: 3, name: 'Head' },
      { id: 4, name: 'Body' },
      { id: 5, name: 'Gloves' },
      { id: 6, name: 'Waist' },
      { id: 7, name: 'Legs' },
      { id: 8, name: 'Feet' },
      { id: 9, name: 'Ears' },
      { id: 10, name: 'Neck' },
      { id: 11, name: 'Wrists' },
      { id: 12, name: 'FingerL' },
      { id: 13, name: 'FingerR' }
    ],
    statsCategory: {
      tank: [
        { id: 1, name: 'Strength' },
        { id: 3, name: 'Vitality' },
        { id: 7, name: 'HP' },
        { id: 19, name: 'Tenacity' },
        { id: 22, name: 'Direct Hit Rate' },
        { id: 27, name: 'Critical Hit' },
        { id: 44, name: 'Determination' },
        { id: 45, name: 'Skill Speed' }
      ],
      healer: [
        { id: 3, name: 'Vitality' },
        { id: 5, name: 'Mind' },
        { id: 6, name: 'Piety' },
        { id: 7, name: 'HP' },
        { id: 22, name: 'Direct Hit Rate' },
        { id: 27, name: 'Critical Hit' },
        { id: 44, name: 'Determination' },
        { id: 46, name: 'Spell Speed' }
      ],
      rangedps: [
        { id: 7, name: 'HP' },
        { id: 2, name: 'Dexterity' },
        { id: 3, name: 'Vitality' },
        { id: 22, name: 'Direct Hit Rate' },
        { id: 27, name: 'Critical Hit' },
        { id: 44, name: 'Determination' },
        { id: 45, name: 'Skill Speed' }
      ],
      meleedps: [
        { id: 1, name: 'Strength' },
        { id: 3, name: 'Vitality' },
        { id: 7, name: 'HP' },
        { id: 22, name: 'Direct Hit Rate' },
        { id: 27, name: 'Critical Hit' },
        { id: 44, name: 'Determination' },
        { id: 45, name: 'Skill Speed' }
      ],
      magic: [
        { id: 3, name: 'Vitality' },
        { id: 4, name: 'Intelligence' },
        { id: 7, name: 'HP' },
        { id: 22, name: 'Direct Hit Rate' },
        { id: 27, name: 'Critical Hit' },
        { id: 44, name: 'Determination' },
        { id: 46, name: 'Spell Speed' }
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
      switch (state.selectedJob) {
        case 'Paladin':
        case 'Warrior':
        case 'Darkknight':
        case 'Gunbreaker':
          return state.statsCategory.tank

        case 'Whitemage':
        case 'Scholar':
        case 'Astrologian':
          return state.statsCategory.healer

        case 'Bard':
        case 'Machinist':
        case 'Dancer':
        case 'Ninja':
          return state.statsCategory.rangedps

        case 'Monk':
        case 'Dragoon':
        case 'Samurai':
          return state.statsCategory.meleedps

        case 'Blackmage':
        case 'Summoner':
        case 'Redmage':
          return state.statsCategory.magic

        default:
          break
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
