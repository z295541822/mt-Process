<template>
  <el-container class="layout-default">
    <el-header>
      <index-page />
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import indexPage from '../components/header/index'
export default {
  name: 'default',
  components: {
    indexPage
  }
}
</script>

<style lang='scss'>
@import url(../assets/css/public/layout.scss);
</style>
