import Axios from 'axios'
import store from '../store'

const service = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  timeout: 99999
})

// http response interceptor
service.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.request.status === 200) {
      return response.data
    } else {
      store.commit('changeLoadingState')
      return Promise.reject(response.request.onloading)
    }
  }, function (error) {
    return Promise.reject(error)
  })

export default service
