<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './TopBar'
import searchBar from './SearchBar'
export default {
  name: 'index',
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="scss">
 @import "src/assets/css/public/header/index.scss";
</style>
