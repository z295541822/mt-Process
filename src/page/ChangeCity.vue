<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot-city title="热门城市" :list="hotList"/>
    </el-row>
    <el-row>
      <hot-city title="最近访问" :list="recentList"/>
    </el-row>
    <el-row>
      <city-list />
    </el-row>
  </div>
</template>

<script>
import api from '../components/api'
import Province from '../components/chanageCity/Province'
import HotCity from '../components/chanageCity/HotCity'
import CityList from '../components/chanageCity/CityList'
export default {
  name: 'ChangeCity',
  components:{
    Province,
    HotCity,
    CityList
  },
  data() {
    return {
      hotList: [],
      recentList: []
    }
  },
  created () {
    api.getHotCity().then(res => {
      this.hotList = res.data.data
    })
    api.getRecentCity().then(res => {
      this.recentList = res.data.data
    })
  }
}
</script>

<style scoped>

</style>
