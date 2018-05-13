// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import '@/assets/style.css'
import Vue from 'vue'
import App from './App'
import { Gtag } from './plugins'
import router from './router'

Vue.use(Gtag, {
  disabled: process.env.NODE_ENV === 'development',
  log: process.env.NODE_ENV === 'development',
  trackId: 'UA-119133959-1'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
