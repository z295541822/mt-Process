<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind === item.tab }"
        :data-type='item.tab'
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item,index) in resultDate[kind]"
        :key="index"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image"
               class="product-img">
          <div class="cbody">
            <div class="product-info">
              <p class="product-title">{{ item.title }}</p>
              <p class="sub-title">{{ item.subTitle }}</p>

              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{ item.price }}</span>
                </span>
                <span class="sold bottom-right-info">{{item.address}}</span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'ShopContainer',
  data () {
    return {
      kind: 'all',
      resultDate: {},
    }
  },
  props: ['nav'],
  created () {
    api.resultsByKeywords().then(res =>{
      this.resultDate = res.data.data
    })
  },
  methods: {
    over (e) {
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 动态获取数据 ajax请求
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/css/index/artistic.scss";
</style>
