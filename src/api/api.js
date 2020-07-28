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

/**
 * get items from XIVAPI
 * @param {Object} params AdvanceDSL search params payload.
 */
export const getItems = (params) => {
  return service({
    url: '/search',
    method: 'GET',
    params: params
  })
}

/**
 * get icons from XIVAPI
 * @param {String} param Path of the icon.
 */
export const getIcon = (param) => {
  return service({
    url: param,
    method: 'GET'
  })
}
