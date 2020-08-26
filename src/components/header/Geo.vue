<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link :to="{ name:'changeCity' }" class="changeCity">
        切换城市
      </router-link>
      [
      <a
        href="#"
        class="link-city"
        v-for="(item,index) in nearCity"
        :key="index"
      >
        {{ item.name }}
      </a>
      ]
      <div class="m-user">
        <router-link :to="{ name:'login' }" class="login">
          立即登录
        </router-link>
        <router-link :to="{ name:'register'}" class="register">
          注册
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'Geo',
  data () {
    return {
      nearCity: []
    }
  },
  watch: {
    "$store.state.position": function () {
      this.nearCity = this.$store.state.position.nearCity
    }
  },
  created () {
    api.getCurPosition().then(res => {
      this.$store.dispatch('setPosition',res)
      this.nearCity = res.nearCity
    })
  }
}
</script>

<style scoped>

</style>
