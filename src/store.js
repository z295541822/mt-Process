import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {},
  userName: ''
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  setUserName (state, val) {
    state.userName = val
  }
}

// 获取到地理位置 由于是异步代码  所以必须要在actions里申请
const actions = {
  setPosition ({ commit }, val) {
    // 异步请求后端获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
