/*
import qs from 'qs'
import store from '../store/index'
*/

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

var body = {
  query: {
    bool: {
      filter: []
    }
  },
  from: 0,
  size: 100
}

console.log(body)

var query = {
  indexes: [],
  columns: []
}

console.log(query)

/**
 * Calculate the total HP of character.
 * Formula for test:
 * ⌊HPModifier * ClassJob.ModifierHP/100⌋ + ⌊⌊|(BaseVIT * ClassJob.ModifierVIT/100 - BaseDEX * ClassJob.ModifierDEX/100)| * (Level - 1)⌋ - (BaseVIT - 340) * ClassJob.ModifierVIT * (Level - 2)⌋
 * + ⌊(TotalVIT - BaseVIT) * 31.5⌋
 * Weight 31.5 for tank & 22.1 for other jobs.
 * @param {int} level Character level.
 * @param {int} vit Total vitality of the character.
 */
export const calculateHP = (level, vit) => {
  return Math.floor(vit)
}
