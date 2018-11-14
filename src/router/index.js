import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/pages/Homepage'
import Section from '@/components/layout/Section'
import SectionContent from '@/components/layout/SectionContent'
import Article from '@/components/layout/Article'
import Search from "@/components/pages/Search"

import sectionsJSON from '@/assets/data/sections.json'
import articlesJSON from '@/assets/data/articles.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Homepage
    },
    {
      path: "/about-us",
      component: Section,
      props: { section: sectionsJSON.sections["about-us"] },
      children: [
        {
          path: "",
          component: SectionContent,
          props: { tab: sectionsJSON.sections["about-us"].tabs.home }
        },
        {
          path: ":tab",
          component: SectionContent,
          props: (route) => ({ tab: sectionsJSON.sections["about-us"].tabs[route.params.tab] })
        }
      ]
    },
    {
      path: "/get-started",
      component: Section,
      props: { section: sectionsJSON.sections["get-started"] },
      children: [
        {
          path: "",
          component: SectionContent,
          props: { tab: sectionsJSON.sections["get-started"].tabs.home }
        },
        {
          path: ":tab",
          component: SectionContent,
          props: (route) => ({ tab: sectionsJSON.sections["get-started"].tabs[route.params.tab] })
        }
      ]
    },
    {
      path: "/services",
      component: Section,
      props: { section: sectionsJSON.sections["services"] },
      children: [
        {
          path: "",
          component: SectionContent,
          props: { tab: sectionsJSON.sections["services"].tabs.home }
        },
        {
          path: ":tab",
          component: SectionContent,
          props: (route) => ({ tab: sectionsJSON.sections["services"].tabs[route.params.tab] })
        }
      ]
    },
    {
      path: "/resources",
      component: Section,
      props: { section: sectionsJSON.sections["resources"] },
      children: [
        {
          path: "",
          component: SectionContent,
          props: { tab: sectionsJSON.sections["resources"].tabs.home }
        },
        {
          path: ":tab",
          component: SectionContent,
          props: (route) => ({ tab: sectionsJSON.sections["resources"].tabs[route.params.tab] })
        }
      ]
    },
    {
      path: "/article/:article",
      component: Article,
      props: (route) => ({ article: articlesJSON.articles[route.params.article] }),
      children: [
        {
          path: "",
          component: Article,
          props: (route) => ({ article: articlesJSON.articles[route.params.article] })
        },
        {
          path: ":subpage",
          component: Article,
          props: (route) => ({ article: articlesJSON.articles[route.params.article] })
        }
      ]
    },
    {
      path: "/search",
      component: Search
    }
  ]
})
