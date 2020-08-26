<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">
        map + fav
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '../components/products/Crumbs'
import Categroy from '../components/products/Categroy'
import List from '../components/products/List'
export default {
name: "goodsList",
  components: {
    Crumbs,
    Categroy,
    List
  }
}
</script>

<style lang="scss">
@import "src/assets/css/products/index.scss";
</style>
