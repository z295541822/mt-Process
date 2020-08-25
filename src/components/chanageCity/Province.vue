<template>
  <div>
    <span class="name">按省份选择</span>
    <my-select
      :list="provinceList" title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <my-select
      :list="cityList" title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
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
export default {
  name: 'Province',
  data() {
    return {
      provinceList: ['山东', '甘肃', '江苏', '北京', '云南', '海南', '浙江', '上海', '天津', '陕西', '新疆',],
      province: '省份',
      cityList: ['青岛', '淄博', '济南', '烟台', '枣庄', '东营', '潍坊', '济宁'],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: ['青岛', '淄博', '济南', '烟台', '枣庄', '东营', '潍坊', '济宁'],
      searchWord: '',
      loading: false,
    }
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
      this.province = value
    },
    changeCity(value) {
      this.city = value
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/css/changecity/iselect.scss";
</style>
