<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点"  @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd>
              <router-link to="/s">京东第一温泉度假村</router-link>
            </dd>
            <dd>
              <router-link to="/s">99旅馆连锁</router-link>
            </dd>
            <dd>
              <router-link to="/s">尚客优快捷酒店</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd>
              <router-link to="/s">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/s">火锅自助</router-link>
            </dd>
            <dd>
              <router-link to="/s">火锅 重庆</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">京东第一温泉度假村</a>
          <a href="#">99旅馆连锁</a>
          <a href="#">尚客优快捷酒店</a>
          <a href="#">7天连锁酒店</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'searchBar',
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created () {
    axios.get('https://api.duyiedu.com/api/meituan/header/searchHotWords.json',{
      params: {
        appkey: 'z295541822_1585742494914',
      }
    }).then(res =>{
      console.log(res)
      this.isHotPlace()
    })
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    }
  },
}
</script>

<style lang="scss">
@import "src/assets/css/public/header/search.scss";
</style>
