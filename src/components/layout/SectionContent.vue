<template>
<b-container fluid class="section-content mt-5" :id="tab.id">
    <transition name="fade" mode="out-in">
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
        ResourcesAffiliated: () => import("./../pages/resources-pages/ResourcesAffiliated"),
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

<style scoped>
.section {
    margin-bottom: 64px;
}

.section-content {
    padding: 0 8% 48px 8%;
    color: #454F63;
}

.content-card {
    max-width: 95%;
    margin: auto;
    border: 0;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    -moz-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    z-index: 2;
}

@media (min-width: 1200px) {

    .section-content,
    .content-card {
        width: 1200px;
        max-width: 1200px;
    }
}

.jumbotron {
    position: relative;
    text-align: center;
    background-color: transparent;
    padding-top: 88px;
    padding-bottom: 168px;
    margin-bottom: -96px;
    z-index: 1;
    overflow: hidden;
}

.jumbotron h1 {
    color: white;
    font-family: "Scope One", "serif";
    font-weight: bolder;
    font-size: 64px;
    letter-spacing: 4px;
    margin-bottom: 0;
}

.jumbotron-img {
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    overflow: hidden;
    z-index: -1;
}

.jumbotron img {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    object-fit: cover;
    object-position: top;
    filter: blur(3px) brightness(65%);
}

.section-content h1 {
    font-family: "Scope One", "serif";
    margin-bottom: 24px;
    color: #1D222D;
}

.section-content h4 {
    font-family: "Montserrat", "sans-serif";
    color: #7A859C;
    margin-top: 28px;
}

.section-content p,
.section-content ul,
.section-content ol {
    font-family: "Montserrat", "sans-serif";
    font-weight: 300;
    font-size: 15px;
}

.divider {
    height: 1.5px;
    border-radius: 50%;
    width: 90%;
    margin: auto;
    background-color: #F4F4F6;
}

.section-content .divider {
    width: 100%;
    margin: 32px 0;
}

.section-content a:not(.btn) {
    color: #38C6D4;
    transition: 0.3s;
    font-weight: 400;
}

.section-content a:not(.btn):hover {
    color: #1f7998;
    text-decoration: none;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
