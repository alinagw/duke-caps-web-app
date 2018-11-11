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
import StartHome from '@/components/pages/get-started-pages/StartHome'
import StartScreening from '@/components/pages/get-started-pages/StartScreening'
import StartWhen from '@/components/pages/get-started-pages/StartWhen'
import StartExpectations from '@/components/pages/get-started-pages/StartExpectations'

import OurServices from '@/components/pages/OurServices'
import ServicesHome from '@/components/pages/our-services-pages/ServicesHome'
import ServicesConsultation from '@/components/pages/our-services-pages/ServicesConsultation'
import ServicesCounseling from '@/components/pages/our-services-pages/ServicesCounseling'
import ServicesPsychiatric from '@/components/pages/our-services-pages/ServicesPsychiatric'
import ServicesHealth from '@/components/pages/our-services-pages/ServicesHealth'
import ServicesWorkshops from '@/components/pages/our-services-pages/ServicesWorkshops'

import Resources from '@/components/pages/Resources'
import ResourcesHome from '@/components/pages/resources-pages/ResourcesHome'
import ResourcesWait from '@/components/pages/resources-pages/ResourcesWait'
import ResourcesStudent from '@/components/pages/resources-pages/ResourcesStudent'
import ResourcesMentalHealth from '@/components/pages/resources-pages/ResourcesMentalHealth'
import ResourcesGroups from '@/components/pages/resources-pages/ResourcesGroups'
import ResourcesEmergency from '@/components/pages/resources-pages/ResourcesEmergency'

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
          path: 'training-programs',
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
          path: '',
          component: StartHome
        },
        {
          path: 'screening',
          component: StartScreening
        },
        {
          path: 'when-can-i-be-seen',
          component: StartWhen
        },
        {
          path: 'what-to-expect',
          component: StartExpectations
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
          path: 'counseling',
          component: ServicesCounseling
        },
        {
          path: 'psychiatric-services',
          component: ServicesPsychiatric
        },
        {
          path: 'health-coaching',
          component: ServicesHealth
        },
        {
          path: 'workshops-discussions',
          component: ServicesWorkshops
        }
      ]
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
      children: [
        {
          path: '',
          component: ResourcesHome
        },
        {
          path: 'while-you-wait',
          component: ResourcesWait
        },
        {
          path: 'student-wellbeing',
          component: ResourcesStudent
        },
        {
          path: 'mental-health',
          component: ResourcesMentalHealth
        },
        {
          path: 'affiliated-groups',
          component: ResourcesGroups
        },
        {
          path: 'emergency',
          component: ResourcesEmergency
        }
      ]
    }
  ]
})
