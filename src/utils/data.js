// import qs from 'qs'
import store from '../store/index'
import { Notify } from 'quasar'

/**
 * sample body structure
 * {
    "query": {
        "bool": {
            "filter": [
                {
                    "range": {
                        "LevelEquip": {
                            "gte": "1"
                        }
                    }
                },
                {
                    "range": {
                        "LevelEquip": {
                            "lte": "80"
                        }
                    }
                },
                {
                    "range": {
                        "LevelItem": {
                            "gte": "470"
                        }
                    }
                },
                {
                    "range": {
                        "LevelItem": {
                            "lte": "505"
                        }
                    }
                },
                {
                    "term": {
                        "ClassJobCategory.BRD": "1"
                    }
                }
            ]
        }
    },
    "from": 0,
    "size": 100
}
 */

export const classJobCategory = {
  rangedps: [
    { job: 'Bard', short: 'brd', src: '/images/03_DPS/Job/Bard.png' },
    { job: 'Machinist', short: 'mch', src: '/images/03_DPS/Job/Machinist.png' },
    { job: 'Dancer', short: 'dnc', src: '/images/03_DPS/Job/Dancer.png' }
  ],
  meleedps: [
    { job: 'Dragoon', short: 'drg', src: '/images/03_DPS/Job/Dragoon.png' },
    { job: 'Monk', short: 'mnk', src: '/images/03_DPS/Job/Monk.png' },
    { job: 'Samurai', short: 'sam', src: '/images/03_DPS/Job/Samurai.png' },
    { job: 'Ninja', short: 'nin', src: '/images/03_DPS/Job/Ninja.png' }
  ],
  magic: [
    { job: 'Blackmage', short: 'blm', src: '/images/03_DPS/Job/BlackMage.png' },
    { job: 'Summoner', short: 'smn', src: '/images/03_DPS/Job/Summoner.png' },
    { job: 'Redmage', short: 'rdm', src: '/images/03_DPS/Job/RedMage.png' }
  ],
  tank: [
    { job: 'Paladin', short: 'pld', src: '/images/01_TANK/Job/Paladin.png' },
    { job: 'Warrior', short: 'war', src: '/images/01_TANK/Job/Warrior.png' },
    { job: 'Darkknight', short: 'drk', src: '/images/01_TANK/Job/DarkKnight.png' },
    { job: 'Gunbreaker', short: 'gnb', src: '/images/01_TANK/Job/Gunbreaker.png' }
  ],
  healer: [
    { job: 'Whitemage', short: 'whm', src: '/images/02_HEALER/Job/WhiteMage.png' },
    { job: 'Scholar', short: 'sch', src: '/images/02_HEALER/Job/Scholar.png' },
    { job: 'Astrologian', short: 'ast', src: '/images/02_HEALER/Job/Astrologian.png' }
  ],
  crafter: [
    { job: 'Alchemist', short: 'alc', src: '/images/04_CRAFTER/Alchemist.png' },
    { job: 'Armorer', short: 'arm', src: '/images/04_CRAFTER/Armorer.png' },
    { job: 'Blacksmith', short: 'bsm', src: '/images/04_CRAFTER/Blacksmith.png' },
    { job: 'Carpenter', short: 'crp', src: '/images/04_CRAFTER/Carpenter.png' },
    { job: 'Culinarian', short: 'cul', src: '/images/04_CRAFTER/Culinarian.png' },
    { job: 'Goldsmith', short: 'gsm', src: '/images/04_CRAFTER/Goldsmith.png' },
    { job: 'Leatherworker', short: 'ltw', src: '/images/04_CRAFTER/Leatherworker.png' }
  ],
  gatherer: [
    { job: 'Botanist', short: 'btn', src: '/images/05_GATHERER/Botanist.png' },
    { job: 'Miner', short: 'min', src: '/images/05_GATHERER/Miner.png' },
    { job: 'Fisher', short: 'fsh', src: '/images/05_GATHERER/Fisher.png' }
  ]
}

const baseParamsModifier = [
  {
    jobs: ['Bard', 'Machinist', 'Dancer', 'Ninja'],
    currentParams: [2, 27, 22, 44, 45]
  },
  {
    jobs: ['Monk', 'Dragoon', 'Samurai'],
    currentParams: [1, 27, 22, 44, 45]
  },
  {
    jobs: ['Blackmage', 'Summoner', 'Redmage'],
    currentParams: [4, 27, 22, 44, 46]
  },
  {
    jobs: ['Paladin', 'Warrior', 'Darkknight', 'Gunbreaker'],
    currentParams: [1, 19, 27, 22, 44, 45]
  },
  {
    jobs: ['Whitemage', 'Scholar', 'Astrologian'],
    currentParams: [5, 6, 27, 22, 44, 46]
  }
]

const baseParams = [
  { ID: 1, Name: 'Strength', BaseValue: 0, BonusValue: 0 },
  { ID: 2, Name: 'Dexterity', BaseValue: 0, BonusValue: 0 },
  { ID: 3, Name: 'Vitality', BaseValue: 0, BonusValue: 0 },
  { ID: 4, Name: 'Intelligence', BaseValue: 0, BonusValue: 0 },
  { ID: 5, Name: 'Mind', BaseValue: 0, BonusValue: 0 },
  { ID: 6, Name: 'Piety', BaseValue: 0, BonusValue: 0 },
  { ID: 19, Name: 'Tenacity', BaseValue: 0, BonusValue: 0 },
  { ID: 22, Name: 'Direct Hit Rate', BaseValue: 0, BonusValue: 0 },
  { ID: 27, Name: 'Critical Hit', BaseValue: 0, BonusValue: 0 },
  { ID: 44, Name: 'Determination', BaseValue: 0, BonusValue: 0 },
  { ID: 45, Name: 'Skill Speed', BaseValue: 0, BonusValue: 0 },
  { ID: 46, Name: 'Spell Speed', BaseValue: 0, BonusValue: 0 }
]

/**
 * load data table columns as array
 */
export const loadColumns = () => {
  var columns = [
    {
      name: 'Name',
      required: true,
      label: 'Name',
      align: 'left',
      field: 'LevelItem',
      sortable: true
    },
    {
      name: 'Materia',
      required: true,
      label: 'Materia',
      align: 'left'
    },
    { name: 3, align: 'left', label: 'Vitality' }
  ]
  // console.log('selectedjob: ', store.state.selectedJob)
  for (var index in baseParamsModifier) {
    // console.log('index: ', index)
    var columnIDs = []
    if (baseParamsModifier[index].jobs.includes(store.state.selectedJob)) {
      columnIDs = baseParamsModifier[index].currentParams
      // console.log('columnIDs: ', columnIDs)
      for (var i in baseParams) {
        if (columnIDs.includes(baseParams[i].ID)) {
          columns.push({
            name: baseParams[i].ID,
            align: baseParams[i].ID > 5 ? 'center' : 'left',
            label: baseParams[i].Name
          })
          // console.log('columns: ', columns)
        }
      }
      return columns
    }
  }
}

/**
 * construct baseparam value array
 */
export const baseParamsFilter = () => {
  var arr = [
    { ID: 0, Name: 'HP', BaseValue: 0, BonusValue: 0 },
    { ID: 3, Name: 'Vitality', BaseValue: 0, BonusValue: 0 }
  ]
  for (var index in baseParamsModifier) {
    if (baseParamsModifier[index].jobs.includes(store.state.selectedJob)) {
      var filter = baseParamsModifier[index].currentParams
    } else {
      continue
    }
    for (var i in filter) {
      var tmp = baseParams.filter((item) => {
        return item.ID === filter[i]
      })
      arr.push(tmp[0])
      // console.log(arr)
    }
    return arr
  }
}

/**
 * extract the short name of the job,used in the queryObject()
 * @param {Object} param the object contains all classjob info
 */
const getShort = (param) => {
  var short = ''
  for (var index in param) {
    // console.log(index)
    for (var i in index) {
      // console.log(i)
      if (store.state.submitedQuery.classjob === param[index][i].job) {
        short = param[index][i].short
        // console.log(short)
        return short.toUpperCase()
      } else {
        break
      }
    }
  }
}

/**
 * construct the query object based on ElasticSearch
 * check document: https://www.elastic.co/guide/en/elasticsearch/reference/6.8/query-dsl.html
 */
export const queryObject = (columns) => {
  try {
    if (store.state.submitedQuery === {}) {
      throw new Error('Submited query is empty.')
    }
  } catch (err) {
    console.log(err)
    Notify.create(err)
  }
  // request query body
  var body = {
    query: {
      bool: {
        filter: []
      }
    },
    from: 0,
    size: 100
  }
  // request query
  var query = {
    indexes: 'item',
    body: {}
  }
  // construct body object
  var levelEquipRange = store.state.submitedQuery.levelequip
  levelEquipRange = levelEquipRange.split(',')
  const LevelEquip = {
    gte: levelEquipRange[0],
    lte: levelEquipRange[1]
  }

  var levelItemRange = store.state.submitedQuery.levelitem
  levelItemRange = levelItemRange.split(',')
  const LevelItem = {
    gte: levelItemRange[0],
    lte: levelItemRange[1]
  }

  const short = getShort(classJobCategory)
  var key = 'ClassJobCategory'
  key = key.concat('.', short)

  body.query.bool.filter.push({ range: { LevelEquip } })
  body.query.bool.filter.push({ range: { LevelItem } })
  body.query.bool.filter.push({ term: { [key]: 1 } })

  // add columns array to query
  // const columns = 'Name,Icon,Stats,LevelItem,CanBeHq,EquipSlotCategory,Rarity,Recipes,MateriaSlotCount,IsAdvancedMeldingPermitted'
  query.body = body
  query = { ...query, columns }
  // console.log(query)

  return query
}

/**
 * Calculate the total HP of character.
 * Based on How to be a Math Wizard - Third Edition:
 * https://docs.google.com/document/d/1OpfKYmf31FpES3IHOrl3H8phU4Np8FChH4B4lP1ZE08/edit#heading=h.j3uztojf6dpv
 * @param {Number} level Character level.
 * @param {Number} vit Total vitality of the character.
 */
export const calculateHP = (level, vit) => {
  return Math.floor(vit)
}
