import axios from 'axios'

axios.interceptors.request.use(function (config) {
  config.params = {
    appkey: 'z295541822_1585742494914'
  }
  config.url = 'https://api.duyiedu.com/' + config.url + '.json'

  return config
})

axios.interceptors.response.use(function (config) {
  config = config.data.data
  return config
})

export default axios
