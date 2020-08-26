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

export default {
  name: 'Categroy',
  components: {
    mySelect
  },
  data () {
    return {
      classicList: [
        {
          'title': '美食',
          'type': 'food',
          'subList': [{
            'name': '日本菜',
            'id': 'Japan'
          }]
        }, {
          'title': '酒店住宿',
          'type': 'hotal',
          'subList': [{
            'name': '温泉酒店',
            'id': 'hot_spring'
          }]
        }
      ],
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
  }
}
</script>

<style scoped>

</style>
