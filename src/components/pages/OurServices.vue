<template>
<content-wrapper :section="section"></content-wrapper>
</template>

<script>
import ContentWrapper from "./../layout/ContentWrapper"

export default {
  name: 'OurServices',
  components: {
    ContentWrapper
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
                        src: "/services/counseling",
                        title: "Counseling",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/services/psychiatric-services",
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
