// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './scss/then.css'
// import './scss/then.scss'
Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))
// Vue.use(then)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
