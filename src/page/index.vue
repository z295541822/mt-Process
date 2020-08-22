<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <menu-list />
      </el-col>
      <el-col :span="19">
        <life-list />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        shop
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuList from '../components/index/Menu'
import LifeList from '../components/index/Life'
export default {
  name: 'index',
  components: {
    MenuList,
    LifeList,
  }
}
</script>

<style lang="scss">
@import "src/assets/css/index/index.scss";
</style>
