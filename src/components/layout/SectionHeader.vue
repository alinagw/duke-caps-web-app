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
        "section"
    ],
    components: {
        SectionTabs
    },
    data() {
        return {
            
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

.jumbotron h1 {
  color: white;
  font-family: "Scope One", "serif";
  font-weight: bolder;
  font-size: 64px;
  letter-spacing: 4px;
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
  width: 100%;
  height: 100% + 8px;
  object-fit: cover;
  filter: blur(3px) brightness(65%);
}

.section-tabs-card {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% - 48px);
    margin: 0 auto;
}
</style>
