import Vue from 'vue'
import Router from 'vue-router'
import StudentsList from '@/components/StudentsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: StudentsList
    }
  ]
})
