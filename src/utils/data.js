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

export const queryObject = () => {
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

  const columns = 'Name,Icon,Stats,LevelItem,CanBeHq,EquipSlotCategory,Rarity,Recips,BaseParamValue0,BaseParam0TargetID,BaseParamValue1,BaseParam1TargetID'
  query.body = body
  query = { ...query, columns }
  // console.log(query)

  return query
}

/**
 * Calculate the total HP of character.
 * Formula for test:
 * ⌊HPModifier * ClassJob.ModifierHP/100⌋ + ⌊⌊|(BaseVIT * ClassJob.ModifierVIT/100 - BaseDEX * ClassJob.ModifierDEX/100)| * (Level - 1)⌋ - (BaseVIT - 340) * ClassJob.ModifierVIT * (Level - 2)⌋
 * + ⌊(TotalVIT - BaseVIT) * 31.5⌋
 * Weight 31.5 for tank & 22.1 for other jobs.
 * @param {Number} level Character level.
 * @param {Number} vit Total vitality of the character.
 */
export const calculateHP = (level, vit) => {
  return Math.floor(vit)
}
