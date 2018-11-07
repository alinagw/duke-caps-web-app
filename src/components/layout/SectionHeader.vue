<template>
<div>
    <b-jumbotron fluid :header="section.title" header-level="4">
      <div class="jumbotron-img">
        <img :src="section.images[0]">
        </div>
        <section-tabs :tabs="section.tabs"></section-tabs>
    </b-jumbotron>
</div>
</template>

<script>
import SectionTabs from "./../layout/SectionTabs"

export default {
    name: 'SectionHeader',
    props: [
        //"section"
    ],
    components: {
        SectionTabs
    },
    data() {
        return {
            section: {
                id: "",
                title: "Section Title",
                src: "link",
                images: ["https://picsum.photos/600/300/?image=25"],
                tabs: [{
                        src: "/about-us/staff",
                        title: "Meet Our Staff",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/staff",
                        title: "Meet Our Staff",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/staff",
                        title: "Meet Our Staff",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    },
                    {
                        src: "/about-us/staff",
                        title: "Meet Our Staff",
                        icon: "https://static.thenounproject.com/png/604071-200.png"
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.jumbotron {
    position: relative;
    text-align: center;
    padding-top: 72px;
    padding-bottom: 72px;
    margin-bottom: 88px;
    background-color: transparent;
}

.jumbotron-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.jumbotron img {
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  object-fit: cover;
  filter: blur(3px);
}

.section-tabs-card {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% - 48px);
    margin: 0 auto;
}
</style>
