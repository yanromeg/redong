import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import childPage from '@/components/childPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect:'/home'},
    {path: '/home', name: 'home',meta:{title:'身边的篮球互娱社区'}, component: home},
    {path: '/childPage', name: 'home',meta:{title:'身边的篮球互娱社区'}, component: childPage}
  ]
})
