import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default.vue'
import blankPage from '../layout/blank'
import ChangeCity from '../page/ChangeCity'
import Login from '../page/Login'
import Register from '../page/Register'
import Index from '../page/index'
import GoodsList from '../page/GoodsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }, {
        path: 's/:name',
        name: 'goodsList',
        component: GoodsList
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      }, {
        path: '/register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
