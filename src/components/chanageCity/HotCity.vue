<template>
  <div class="m-hcity">
    <dl>
      <dt>{{ title }}</dt>
      <dd v-for="(item,index) in list" :key="index">{{ item.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'HotCity',
  props: [
    'title',
    'list'
  ]
}
</script>

<style lang="scss">
@import "src/assets/css/changecity/hot.scss";
</style>
