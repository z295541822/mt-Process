import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default.vue'
import blankPage from '../layout/blank'
import ChangeCity from '../page/ChangeCity'
import Login from '../components/Login'
import Register from '../components/Register'
import Index from '../page/index'

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
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
