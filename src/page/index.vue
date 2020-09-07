<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <menu-list/>
      </el-col>
      <el-col :span="19">
        <life-list/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <shop-container :nav="isStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <shop-container :nav="movie" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <shop-container :nav="discount"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuList from '../components/index/Menu'
import LifeList from '../components/index/Life'
import ShopContainer from '../components/index/ShopContainer'

export default {
  name: 'index',
  data () {
    return {
      isStyle: {
        class: 'istyle',
        title: '有格调',
        list: [{
          text: '全部',
          tab: 'all'
        }, {
          text: '约会聚餐',
          tab: 'food'
        }, {
          text: '丽人SPA',
          tab: 'spa'
        }]
      },
      movie:{
        class: 'movie',
        title: '猫眼电影',
        list: [{
          text: '正在热映',
          tab: 'all'
        }, {
          text: '即将上映',
          tab: 'food'
        }]
      },
      discount: {
        class: 'mingsu',
        title: '狠优惠',
        list: [{
          text: '全部',
          tab: 'all'
        }, {
          text: '美食',
          tab: 'food'
        },{
          text: '休闲',
          tab: 'xiuxian'
        }]
      }
    }
  },
  components: {
    MenuList,
    LifeList,
    ShopContainer,
  }
}
</script>

<style lang="scss">
@import "src/assets/css/index/index.scss";
</style>
