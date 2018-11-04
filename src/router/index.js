import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/pages/Homepage'
import AboutUs from '@/components/pages/AboutUs'
import GetStarted from '@/components/pages/GetStarted'
import OurServices from '@/components/pages/OurServices'
import Resources from '@/components/pages/Resources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs,
      children: [
        {
          path: 'child',
          component: AboutUs
        }
      ]
    },
    {
      path: '/get-started',
      name: 'GetStarted',
      component: GetStarted,
      children: [
        {
          path: 'child',
          component: GetStarted
        }
      ]
    },
    {
      path: '/services',
      name: 'OurServices',
      component: OurServices,
      children: [
        {
          path: 'child',
          component: OurServices
        }
      ]
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
      children: [
        {
          path: 'child',
          component: Resources
        }
      ]
    }
  ]
})
