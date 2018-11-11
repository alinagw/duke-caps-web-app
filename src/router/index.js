import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/pages/Homepage'

import AboutUs from '@/components/pages/AboutUs'
import AboutHome from '@/components/pages/about-us-pages/AboutHome'
import AboutStaff from '@/components/pages/about-us-pages/AboutStaff'
import AboutPolicies from '@/components/pages/about-us-pages/AboutPolicies'
import AboutTraining from '@/components/pages/about-us-pages/AboutTraining'
import AboutWellnessCenter from '@/components/pages/about-us-pages/AboutWellnessCenter'

import GetStarted from '@/components/pages/GetStarted'

import OurServices from '@/components/pages/OurServices'
import ServicesHome from '@/components/pages/our-services-pages/ServicesHome'
import ServicesConsultation from '@/components/pages/our-services-pages/ServicesConsultation'
import ServicesIndividual from '@/components/pages/our-services-pages/ServicesIndividual'
import ServicesGroup from '@/components/pages/our-services-pages/ServicesGroup'
import ServicesCouples from '@/components/pages/our-services-pages/ServicesCouples'
import ServicesPsychiatric from '@/components/pages/our-services-pages/ServicesPsychiatric'
import ServicesHealth from '@/components/pages/our-services-pages/ServicesHealth'
import ServicesWorkshops from '@/components/pages/our-services-pages/ServicesWorkshops'

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
          path: '',
          component: AboutHome
        },
        {
          path: 'staff',
          component: AboutStaff
        },
        {
          path: 'policies',
          component: AboutPolicies
        },
        {
          path: 'training',
          component: AboutTraining
        },
        {
          path: 'student-wellness-center',
          component: AboutWellnessCenter
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
          path: '',
          component: ServicesHome
        },
        {
          path: 'consultation',
          component: ServicesConsultation
        },
        {
          path: 'individual-counseling',
          component: ServicesIndividual
        },
        {
          path: 'group-counseling',
          component: ServicesGroup
        },
        {
          path: 'couples-counseling',
          component: ServicesCouples
        },
        {
          path: 'psychiatric',
          component: ServicesPsychiatric
        },
        {
          path: 'health-coaching',
          component: ServicesHealth
        },
        {
          path: 'workshops-discussions',
          component: ServicesWorkshops
        },
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
