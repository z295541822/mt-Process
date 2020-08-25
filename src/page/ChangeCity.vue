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
      hotList: ['青岛', '淄博', '济南', '烟台', '枣庄', '东营'],
      recentList: ['青岛', '淄博', '济南', '烟台', '枣庄', '东营']
    }
  }
}
</script>

<style scoped>

</style>
