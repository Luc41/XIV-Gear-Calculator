import Axios from 'axios'

const service = Axios.create({
  baseURL: 'https://cafemaker.wakingsands.com',
  timeout: 99999
})

export default service
