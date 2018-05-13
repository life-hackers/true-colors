// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import '@/assets/style.css'
import Vue from 'vue'
import App from './App'
// remove index will shows 'Uncaught ReferenceError: exports is not defined'
import { Gtag } from './plugins'
import router from './router'

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
Vue.use(Gtag, {
  disabled: isProd,
  log: isDev,
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
