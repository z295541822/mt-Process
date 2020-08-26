<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{ position }}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{ position }}{{ $route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
name: "Crumbs",
computed: {
  position () {
    return this.$store.state.position
  }
}
}
</script>

<style lang="scss">
  //@import "src/assets/css/products/index.scss";
</style>
