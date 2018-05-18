import Vue from 'vue'
import Router from 'vue-router'
import StudentsList from '@/components/StudentsList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: StudentsList
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
