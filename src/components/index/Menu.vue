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
        <i :class="item.icon"></i>
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail" v-if="curDetail"
      @mouseenter="dataEnter"
      @mouseleave="dataLeave"
    >
      <template
        v-for="(item,index) in curDetail.children"
      >
        <h4 :key="index">{{ item.title }}</h4>
        <span
          v-for="(v,i) in item.children"
          :key="v + '_' + i"
        >
          {{ v }}
        </span>
<!--        <span>代金券</span>-->
<!--        <span>代金券</span>-->
<!--        <span>代金券</span>-->
<!--        <span>代金券</span>-->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data() {
    return {
      curDetail: null,
      menuNav: [{
        title:'美食',
        icon: 'food',
        children: [{
          title: '美食',    // 放h4标签里的
          children: ['代金券', '代金券', '代金券', '代金券', '代金券', '代金券', '代金券', '代金券', '代金券', ]
        }]
      },
        {
          title:'外卖',
          icon: 'takeout',
          children: [{
            title: '外卖',    // 放h4标签里的
            children: ['美团外卖']
          }]
        },
        {
          title:'酒店',
          icon: 'hotel',
          children: [{
            title: '酒店星级',    // 放h4标签里的
            children: ['经济型', '舒适三星', '经典性', '高档次型', '豪华五星']
          }]
        }]
    }
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
