import Vue from 'vue'
import Router from 'vue-router'
import homeSec from '../../components/home/homeSec'
import proSer from '../../components/proSer/proSer'
import application from '../../components/application/application'
import solution from '../../components/solution/solution'
import news from '../../components/news/news'
import aboutUs from '../../components/about-us/about-us'
import aplibody from '../../components/application/aplibody/aplibody'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path:'/home',
      component:homeSec
    },
    {
      path:'/proSer',
      component:proSer
    },
    {
      path:'/solution',
      component:solution
    },
    {
      path:'/application',
      component:application
    },
    {
      path:'/news',
      component:news
    },
    {
      path:'/aboutUs',
      component:aboutUs
    },
    {
      path:'/aplibody',
      component:aplibody
    }
  ]
})