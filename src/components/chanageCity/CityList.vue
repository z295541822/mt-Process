<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母先择：</dt>
      <dd
        v-for="(item,index) in list"
        :key="index"
      >
        <a :href="'#city-' + item ">{{ item }}</a>
      </dd>
    </dl>

    <dl
      class="m-categroy-section"
      v-for="(item,index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
       <span
         v-for="city in item"
         :key="city.id"
       >{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data() {
    return {
      list: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: null,
    }
  },
  created () {
    let data = [{
      'id': 1,
      'name': '北京',
      'pinyin': 'beijing',
      'acronym': 'bj',
      'rank': 'B',
      'firstChar': 'b'
    },{
      'id': 10,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'S',
      'firstChar': 's'
    },{
      'id': 11,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'C',
      'firstChar': 'c'
    },{
      'id': 12,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'A',
      'firstChar': 'a'
    },{
      'id': 13,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'R',
      'firstChar': 'r'
    },{
      'id': 14,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'W',
      'firstChar': 'w'
    },{
      'id': 15,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'I',
      'firstChar': 'i'
    },{
      'id': 16,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'K',
      'firstChar': 'k'
    },{
      'id': 17,
      'name': '上海',
      'pinyin': 'shanghai',
      'acronym': 'sh',
      'rank': 'M',
      'firstChar': 'm'
    },]
    let obj = {}
    data.forEach((item,index) =>{
      if (!obj[item.firstChar.toUpperCase()]){
        obj[item.firstChar.toUpperCase()] = []
      }
      obj[item.firstChar.toUpperCase()].push(item)
    })
    this.cityGroup = obj
  }
}
</script>

<style lang="scss">
@import "src/assets/css/changecity/categroy.scss";
</style>
