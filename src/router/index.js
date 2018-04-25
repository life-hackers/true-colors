import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landing-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    }
  ]
})
