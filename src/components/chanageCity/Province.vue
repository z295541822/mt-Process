<template>
  <div>
    <span class="name">按省份选择</span>
    <my-select
      :list="provinceList" title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <my-select
      :list="cityList" title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />

    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MySelect from './Select'
import api from '../api'
export default {
  name: 'Province',
  data() {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: ['青岛', '淄博', '济南', '烟台', '枣庄', '东营', '潍坊', '济宁'],
      searchWord: '',
      loading: false,
      cityDisabled: true,
    }
  },
  created () {
    api.getProvinceList().then(res =>{
      this.provinceList = res.map((item) => {
        item.name = item.provinceName
        return item
      })
    })
  },
  components: {
    MySelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag
      if(flag) {
        this.cityActive = false
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    remoteMethod(val) {
      // 请求后端接口
    },
    changeProvince(value) {
      this.province = value.name
      this.cityDisabled = false
      this.cityList = value.cityInfoList
    },
    changeCity(value) {
      this.city = value.name
      this.$store.dispatch('setPosition',value)
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/css/changecity/iselect.scss";
</style>
