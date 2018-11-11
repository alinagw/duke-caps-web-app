<template>
<content-wrapper :section="section"></content-wrapper>
</template>

<script>
import ContentWrapper from "./../layout/ContentWrapper"
export default {
  name: 'Resources',
  components: {
    ContentWrapper
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
