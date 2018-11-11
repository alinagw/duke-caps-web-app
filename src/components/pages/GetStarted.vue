<template>
<content-wrapper :section="section"></content-wrapper>
</template>

<script>
import ContentWrapper from "./../layout/ContentWrapper"

export default {
    name: 'GetStarted',
    components: {
        ContentWrapper
    },
    data() {
        return {
            section: {
                id: "",
                title: "Get Started",
                src: "link",
                images: [""],
                tabs: [{
                        src: "/get-started",
                        title: "Get Started",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/get-started/screening",
                        title: "Is CAPS Right for Me?",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/get-started/when-can-i-be-seen",
                        title: "When Can I Be Seen?",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/get-started/what-to-expect",
                        title: "What to Expect",
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
