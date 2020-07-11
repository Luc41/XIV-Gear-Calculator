import Axios from 'axios'
import store from '../store'

const service = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  timeout: 5000
})

// http response interceptor
// still need construct
service.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.request.status === 200) {
      return response.data
    } else {
      const error = 'response error'
      store.commit('errorMessage', error)
      return Promise.reject(error)
    }
  }, function (error) {
    console.log('err' + error)
    return Promise.reject(error)
  })

export default service
