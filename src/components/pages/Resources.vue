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
  name: 'Resources',
  components: {
    SectionHeader
  },
  data () {
    return {
      section: {
                id: "",
                title: "Resources",
                src: "link",
                images: [""],
                tabs: [{
                        src: "/resources",
                        title: "Resources",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/resources/while-you-wait",
                        title: "While You Wait",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/resources/student-wellbeing",
                        title: "Student Wellbeing",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/resources/mental-health",
                        title: "Mental Health",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/resources/affiliated-groups",
                        title: "Affiliated Groups",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/resources/emergency",
                        title: "Emergency",
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
