import service from './index'

export const getRacies = () => {
  return service({
    url: '/race',
    method: 'GET'
  })
}

export const getTribes = () => {
  return service({
    url: '/tribe',
    method: 'GET'
  })
}

export const getPatches = () => {
  return service({
    url: '/patchlist',
    method: 'GET'
  })
}

export const getMateria = () => {
  return service({
    url: '/materia',
    method: 'GET'
  })
}

export const getMateriaJoinRate = () => {
  return service({
    url: '/materiajoinrate',
    method: 'GET'
  })
}

export const getGameContent = (index, id) => {
  return service({
    url: `/${index}/${id}`,
    method: 'GET'
  })
}

/**
 * get items from XIVAPI
 * @param {Object} params AdvanceDSL search params payload.
 */
export const getItems = (data) => {
  return service({
    url: '/search',
    method: 'POST',
    data: data
  })
}

/**
 * get extra columns from an item base on it's url
 * @param {String} itemid path of the item.
 * @param {String} param payload within the wanted columns of item.
 */
export const getExtraColumns = (itemid, param) => {
  return service({
    url: `/item/${itemid}?columns=${param}`,
    method: 'GET'
  })
}

/**
 * get base value of current item
 * @param {Number} itemlevel itemlevel of current item
 */
export const getItemLevelModifier = (itemlevel) => {
  return service({
    url: `/itemlevel/${itemlevel}`,
    method: 'GET'
  })
}
