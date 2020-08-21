<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd
            v-for="(list,index) in mtList"
            :key="index"
          >
            <router-link to="/">{{ list }}</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link to="/">商家中心</router-link>
        <dl>
          <dd
            v-for="(business,index) in baseCenter"
            :key="index"
          >
            <router-link to="/">{{ business }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">美团规则</router-link>
        <dl>
          <dd
            v-for="(ruler,index) in mtRuler"
            :key="index"
          >
            <router-link to="/">{{ ruler }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{name: 'my'}">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"></a>
            </dd>
            <dd>
              <a href="https://minsu.meituan.com/app/" target="_blank"><img class="appicon" src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" title="民宿app" alt="民宿app"></a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"></a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app"></a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      mtList: ['我的订单', '我的收藏', '抵用券', '账户设置'],
      baseCenter: ['美团餐饮商户中心', '登录商家中心', '美团智能收银', '我想合作', '手机免费开店', '餐饮代理商招募', '商家申请开票', '免费合作美团排队'],
      mtRuler: ['规则中心', '规则目录', '规则评议院']
      // webNav: [{
      //   title: '酒店旅游',
      //   children: [{
      //     project: ['国际机票', '火车票', '民宿', '经济型酒店', '主题酒店', '商务酒店', '公寓', '豪华酒店', '客栈', '青年旅社', '度假酒店', '别墅', '农家院']
      //   },
      //   {
      //     title: '吃美食',
      //     children: [{
      //       project: ['烤鱼', '特色小吃', '烧烤', '自助餐', '火锅', '代金券']
      //     }]
      //   },
      //   {
      //     title: '看电影',
      //     children: [{
      //       project: ['热映电影', '热门影院', '热映电影口碑榜', '最受期待电影', '国内票房榜', '北美票房榜', '电影排行榜']
      //     }]
      //   }]
      // }]
    }
  }
}
</script>

<style scoped>

</style>
