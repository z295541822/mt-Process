<template>
  <div class="m-menu">
    <dl
      class="nav"
      @mouseleave="menuLeave"
    >
      <dt>全部分类</dt>
      <dd
        v-for="(item,index) in menuNav"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail" v-if="curDetail"
      @mouseenter="dataEnter"
      @mouseleave="dataLeave"
    >
      <template
        v-for="(item,index) in curDetail.items"
      >
        <h4 :key="index">{{ item.title }}</h4>
        <span
          v-for="(v,i) in item.items"
          :key="v + '_' + i"
        >
          {{ v }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'MenuList',
  data() {
    return {
      curDetail: null,
      menuNav: []
    }
  },
  created () {
    api.getMenuNav().then(res => {
      this.menuNav = res
    })
  },
  methods: {
    menuEnter(item){
      this.curDetail = item
    },
    menuLeave(){
      let self = this;
      this.timer = setTimeout(function () {
        self.curDetail = null
      },200)
    },
    dataEnter(){
      clearTimeout(this.timer)
    },
    dataLeave(){
      this.curDetail = null
    }
  }
}
</script>

<style scoped>

</style>
