import 'normalize.css'
import '@/assets/style.css'
import Vue from 'vue'
import { Gtag, VueClipboard, VueColor } from './plugins'

const env = process.env.NODE_ENV
const isProd = env === 'production'
const isDev = env === 'development'

export function loadPlugins () {
  Vue.config.productionTip = isDev

  Vue.use(Gtag, {
    disabled: !isProd,
    log: isDev,
    trackId: 'UA-119133959-1'
  })
  Vue.use(VueClipboard, {
    alias: 'clip'
  })
  Vue.use(VueColor)
}
