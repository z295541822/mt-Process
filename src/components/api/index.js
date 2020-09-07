import axios from '../../axios'

var api = {
  searchHotWords () {
    return axios.get('api/meituan/header/searchHotWords.json')
  },
  searchList () {
    return axios.get('api/meituan/header/search.json')
  },
  getMenuNav () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 有格调接口
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取省份列表
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 获取当前地理信息
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  // 登录接口
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  // 注册接口
  register (params) {
    return axios.get('/api/meituan/register', params)
  },
  // 获取分类列表
  getLifeList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  // 获取区域列表
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  }
}

export default api
