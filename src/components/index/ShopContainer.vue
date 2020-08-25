<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind === item.tab }"
        :data-type=item.tab
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item,index) in list"
        :key="index"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image"
               class="product-img">
          <div class="cbody">
            <div class="product-info">
              <p class="product-title">{{ item.title }}</p>
              <p class="sub-title">{{ item.subtitle }}</p>

              <div
                class="price-info"
                v-if="item.rentNum && item.price_info.current_price"
              >
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{ item.price_info.current_price }}</span>
                </span>
                  <span class="old-price">门市价￥{{ item.price_info.old_price }}</span>
                  <span class="sold bottom-right-info">{{ item.address }}</span>
              </div>

              <div class="price-info"
                   v-else-if="!item.rentNum"
              >
                <span class="current-price-wrapper">
                  <span class="current-price numfont">抢光了</span>
                </span>
              </div>

              <div class="price-info" v-else>
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                  <span class="units">/{{ item.price_info.units }}</span>
                </span>
              </div>

            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopContainer',
  data () {
    return {
      kind: 'spa',
      list: [{
        image: 'https://img.meituan.net/phoenix/9569b8d3887acec09585b3791163683e2722538.jpg@740w_416h_1e_1c',
        title: '林肯公园Loft二层大床双人间近地铁每客消毒',
        subtitle: '整套4居室·可住2人 | 亦庄地区',
        price_info: {
          current_price: null,
          old_price: null,
          avg_price: 18,
          units: '人均',
        },
        address: '崇文门',
        rentNum: 0,   // 销售量
      }, {
        image: 'https://img.meituan.net/phoenix/7ef7098c5dfd5a70f9d8b5b484dbfd251587725.jpg@740w_416h_1e_1c',
        title: '林肯公园Loft二层大床双人间近地铁每客消毒',
        subtitle: '整套1居室·可住4人 | 良乡大学城',
        price_info: {
          current_price: 18,
          old_price: 36,
          avg_price: null,
          units: null,
        },
        address: '崇文门',
        rentNum: 10,   // 销售量
      },{
        image: 'https://img.meituan.net/phoenix/9569b8d3887acec09585b3791163683e2722538.jpg@740w_416h_1e_1c',
        title: '林肯公园Loft二层大床双人间近地铁每客消毒',
        subtitle: '整套4居室·可住2人 | 亦庄地区',
        price_info: {
          current_price: null,
          old_price: null,
          avg_price: 18,
          units: '人均',
        },
        address: '崇文门',
        rentNum: 10,   // 销售量
      },]
    }
  },
  props: [
    'nav'
  ],
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
