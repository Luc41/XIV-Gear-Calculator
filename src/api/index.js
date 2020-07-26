import Axios from 'axios'

const service = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  timeout: 60000
})

/** http response interceptor
 * still need construct
 */
service.interceptors.response.use(
  response => {
    console.log(response.config, response.status, response.data)
    if (response.request.status === 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  }, error => {
    console.log('err' + error)
    return Promise.reject(error)
  })

export default service
