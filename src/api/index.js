import Axios from 'axios'
import store from '../store'

const service = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  timeout: 99999
})

// http response interceptor
service.interceptors.response.use(
  function (response) {
    if (response.data.code === 0 || response.headers.success === 'true') {
      return response.data
    } else {
      store.commit('changeLoadingState')
      return Promise.reject(response.data.msg)
    }
  }, function (error) {
    return Promise.reject(error)
  })

export default service
