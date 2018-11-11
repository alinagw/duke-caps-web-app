<template>
  <div>
    <section-header :section="section"></section-header>
    <b-container fluid class="section-content">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import SectionHeader from "./../layout/SectionHeader"
export default {
  name: 'OurServices',
  components: {
    SectionHeader
  },
  data () {
    return {
      section: {
                id: "",
                title: "Our Services",
                src: "link",
                images: [""],
                tabs: [{
                        src: "/services",
                        title: "Our Services",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/consultation",
                        title: "Consultation",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/individual-counseling",
                        title: "Individual Counseling",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/group-counseling",
                        title: "Group Counseling",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/couples-counseling",
                        title: "Couples Counseling",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/psychiatric",
                        title: "Psychiatric Services",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/health-coaching",
                        title: "Health Coaching",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/workshops-discussions",
                        title: "Workshops & Discussions",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    }
                ]
            }
      
    }
  }
}
</script>

<style>


</style>
