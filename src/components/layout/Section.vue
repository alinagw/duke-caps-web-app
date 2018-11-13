<template>
<div class="section" :id="section.id">
    <b-jumbotron fluid :header="section.title" header-level="4">
        <div class="jumbotron-img">
            <img :src="section.image">
        </div>
    </b-jumbotron>
    <b-container fluid>
        <b-card class="content-card" no-body>
            <section-tabs :section="section.id" :tabs="section.tabs"></section-tabs>
            <div class="divider"></div>
            <router-view></router-view>
        </b-card>
    </b-container>
</div>
</template>
<script>
import SectionTabs from "./SectionTabs"
export default {
    name: 'Section',
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

<style>

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
    .section-content, .content-card {
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

.section-content p, .section-content ul, .section-content ol {
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
</style>