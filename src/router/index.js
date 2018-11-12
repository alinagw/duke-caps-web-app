import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/pages/Homepage'
import Section from '@/components/layout/Section'
import SectionContent from '@/components/layout/SectionContent'
import Article from '@/components/layout/Article'

import sectionsJSON from '@/assets/data/sections.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Homepage
    },
    {
      path: "/:section",
      component: Section,
      props: (route) => ({ section: sectionsJSON.sections[route.params.section] }),
      children: [
        {
          path: "",
          component: SectionContent,
          props: (route) => ({ tab: sectionsJSON.sections[route.params.section].tabs.home })
        },
        {
          path: ":tab",
          component: SectionContent,
          props: (route) => ({ tab: sectionsJSON.sections[route.params.section].tabs[route.params.tab] }),
          children: [
            {
              path: ":article",
              component: Article
            }
          ]
        }
      ]
    }
  ]
})
