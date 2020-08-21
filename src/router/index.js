import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default.vue'
import blankPage from '../layout/blank'
import ChangeCity from '../components/ChangeCity'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: ChangeCity
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
