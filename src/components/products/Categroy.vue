<template>
  <div class="m-product-categrpy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd
        v-for="item in classicList"
        :key='item.type'
      >
        <my-select :name="item.title" :list="item.subList"/>
      </dd>
      <dd>
      </dd>
    </dl>

    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd
        v-for="item in areaList"
        :key='item.type'
      >
        <my-select :name="item.title" :list="item.subList"/>
      </dd>
      <dd>
      </dd>
    </dl>
  </div>
</template>

<script>
import mySelect from './Select'
import api from '../api'
export default {
  name: 'Categroy',
  components: {
    mySelect
  },
  data () {
    return {
      classicList: [],
      areaList: [
        {
          'title': '推荐商圈',
          'subList': [{
            'name': '望京',
            'id': 120000
          }, {
            'name': '昌平',
            'id': 12222
          }]
        }
      ]
    }
  },
  created () {
    api.getLifeList().then((res) => {
      // console.log(res.data)
        this.classicList = res.data.data
    });
    api.getAreaList().then((res) => {
      // console.log(res.data)
    })
  }
}
</script>

<style scoped>

</style>
