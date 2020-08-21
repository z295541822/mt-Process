<template>
  <el-container class="layout-default">
    <el-header height="">
      <index-page />
    </el-header>
    <el-main>Main</el-main>
    <el-footer height="">
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import indexPage from '../components/header/index'
import MyFooter from '../components/footer/index'
export default {
  name: 'default',
  components: {
    indexPage,
    MyFooter
  }
}
</script>

<style lang='scss'>
@import url(../assets/css/public/layout.scss);
</style>
