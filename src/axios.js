import axios from 'axios'
axios.defaults.baseURL = 'https://api.duyiedu.com/'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'z295541822_1585742494914'
  }

  return config
})

export default axios
