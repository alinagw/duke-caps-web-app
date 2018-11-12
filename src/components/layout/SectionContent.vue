<template>
<b-container fluid class="section-content mt-5" :id="tab.id">
    <transition name="component-fade" mode="out-in">
    <component :is="tabComponent"></component>
    </transition>
</b-container>
</template>

<script>
export default {
    name: 'SectionContent',
    props: [
        "tab"
    ],
    components: {
        AboutHome: () => import("./../pages/about-us-pages/AboutHome"),
        AboutStaff: () => import("./../pages/about-us-pages/AboutStaff"),
        AboutPolicies: () => import("./../pages/about-us-pages/AboutPolicies"),
        AboutTraining: () => import("./../pages/about-us-pages/AboutTraining"),
        AboutWellnessCenter: () => import("./../pages/about-us-pages/AboutWellnessCenter"),
        StartHome: () => import("./../pages/get-started-pages/StartHome"),
        StartScreening: () => import("./../pages/get-started-pages/StartScreening"),
        StartWhen: () => import("./../pages/get-started-pages/StartWhen"),
        StartExpectations: () => import("./../pages/get-started-pages/StartExpectations"),
        ServicesHome: () => import("./../pages/our-services-pages/ServicesHome"),
        ServicesConsultation: () => import("./../pages/our-services-pages/ServicesConsultation"),
        ServicesCounseling: () => import("./../pages/our-services-pages/ServicesCounseling"),
        ServicesPsychiatric: () => import("./../pages/our-services-pages/ServicesPsychiatric"),
        ServicesHealth: () => import("./../pages/our-services-pages/ServicesHealth"),
        ServicesWorkshops: () => import("./../pages/our-services-pages/ServicesWorkshops"),
        ResourcesHome: () => import("./../pages/resources-pages/ResourcesHome"),
        ResourcesWait: () => import("./../pages/resources-pages/ResourcesWait"),
        ResourcesStudent: () => import("./../pages/resources-pages/ResourcesStudent"),
        ResourcesMentalHealth: () => import("./../pages/resources-pages/ResourcesMentalHealth"),
        ResourcesGroups: () => import("./../pages/resources-pages/ResourcesGroups"),
        ResourcesEmergency: () => import("./../pages/resources-pages/ResourcesEmergency"),
    },
    data() {
        return {
            
        }
    },

    computed: {
        tabComponent () {
            return this.tab.component;
        }
    }
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
