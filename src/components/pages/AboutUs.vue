<template>
<content-wrapper :section="section"></content-wrapper>
</template>

<script>
import ContentWrapper from "./../layout/ContentWrapper"

export default {
    name: 'AboutUs',
    components: {
        ContentWrapper
    },
    data() {
        return {
            section: {
                id: "",
                title: "About Us",
                src: "link",
                images: ["https://studentaffairs.duke.edu/sites/default/files/styles/carousel_a_image_xwide/public/2017-12/IMG_0483_5.jpg?itok=hFp3X1Pf"],
                tabs: [{
                        src: "/about-us",
                        title: "About Us",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/staff",
                        title: "Meet Our Staff",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/policies",
                        title: "Our Policies",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/training-programs",
                        title: "Training Programs",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/student-wellness-center",
                        title: "Student Wellness Center",
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
