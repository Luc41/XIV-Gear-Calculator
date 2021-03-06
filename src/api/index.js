import Axios from 'axios'
import { Promise } from 'core-js'

const service = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  // baseURL: 'https://xivapi.com',
  timeout: 60000
})

service.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    return Promise.resolve(config)
  }, error => {
    console.log('Request error' + error)
    return Promise.reject(error)
  }
)

/** http response interceptor
 * still need construct
 */
service.interceptors.response.use(
  response => {
    console.log(response)
    if (response.request.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  }, error => {
    console.log('err' + error)
    return Promise.reject(error)
  })

const translateService = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  timeout: 60000
})

translateService.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    return Promise.resolve(config)
  }, error => {
    console.log('Request error' + error)
    return Promise.reject(error)
  }
)

translateService.interceptors.response.use(
  response => {
    console.log(response)
    if (response.request.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  }, error => {
    console.log('err' + error)
    return Promise.reject(error)
  })

export default service
