import Vue from 'vue'
import Router from 'vue-router'
import homeSec from '../../components/home/homeSec'
import application from '../../components/application/application'
import solution from '../../components/solution/solution'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path:'/home',
      component:homeSec
    },
    {
      path:'/solution',
      component:solution
    },
    {
      path:'/application',
      component:application
    }
  ]
})