import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import childPage from '@/components/childPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home',meta:{title:'首页'}, component: home},
    {path: '/childPage', name: 'home',meta:{title:'子页'}, component: childPage}
  ]
})
