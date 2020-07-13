import service from './index'

export const getRacies = () => {
  return service({
    url: '/race',
    method: 'get'
  })
}

export const getTribes = () => {
  return service({
    url: '/tribe',
    method: 'get'
  })
}

export const getPatches = () => {
  return service({
    url: '/patchlist',
    method: 'get'
  })
}
