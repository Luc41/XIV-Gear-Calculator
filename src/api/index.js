import Axios from 'axios'

class requestChinese {
  constructor (filter) {
    this.instance = Axios.create({
      baseURL: 'https://cafemaker.wakingsands.com',
      timeout: 1000
    })
    this.filter = filter
  }

  search (filter) {
    this.instance.get({
      url: '/search',
      params: {
        searchParam: filter
      }
    })
      .then(
        function (res) {
          return res.data.Results
        }
      )
  }

  get (filter) {
    this.instance.get({
      url: filter
    })
      .then(
        function (res) {
          return res.data.Results
        }
      )
  }
}

class requestDefault {
  constructor () {
    this.instance = Axios.create({
      baseURL: 'https://xivapi.com',
      timeout: 1000
    })
  }
}

export default { requestChinese, requestDefault }
