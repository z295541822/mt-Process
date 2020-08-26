import axios from '../../axios'

var api = {
  searchHotWords () {
    return axios.get('api/meituan/header/searchHotWords')
  },
  searchList () {
    return axios.get('api/meituan/header/search')
  },
  getMenuNav () {
    return axios.get('/api/meituan/index/nav')
  },
  // 有格调接口
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents')
  },
  // 获取省份列表
  getProvinceList () {
    return axios.get('/api/meituan/city/province')
  },
  // 获取当前地理信息
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition')
  },
  // 城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList')
  }
}

export default api
