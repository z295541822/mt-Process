<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      涿州
      <router-link :to="{ name:'changeCity' }" class="changeCity">
        切换城市
      </router-link>
      [
      <a href="#" class="link-city">高碑店</a>
      <a href="#" class="link-city">固安县</a>
      <a href="#" class="link-city">门头沟区</a>
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
export default {
  name: 'Geo'
}
</script>

<style scoped>

</style>
