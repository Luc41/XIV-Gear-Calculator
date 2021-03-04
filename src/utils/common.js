// import qs from 'qs'
import store from '../store/index'
import { Notify } from 'quasar'
import { baseParams, baseParamsModifier, classJobCategory } from './data'

/**
 * load data table columns as array
 */
export const loadColumns = (selectedJob) => {
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
    }
  ]
  for (var index in baseParamsModifier) {
    var columnIDs = []
    if (baseParamsModifier[index].jobs.includes(selectedJob)) {
      columnIDs = baseParamsModifier[index].currentParams

      for (var i in columnIDs) {
        const columnName = store.state.baseParamsStorage[columnIDs[i] - 1]
        columns.push({
          name: columnName.ID,
          align: 'center',
          label: columnName.Name
        })
      }
    } else {
      continue
    }
    return columns
  }
}

/**
 * construct baseparam value array
 */
// need rewrite
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
    for (var i in param[index]) {
      if (store.state.submitedQuery.classjob === param[index][i].name) {
        short = param[index][i].short
        return short.toUpperCase()
      } else {
        continue
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
  query.body = body
  query = { ...query, columns }

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
