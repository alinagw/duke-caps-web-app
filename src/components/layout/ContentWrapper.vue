<template>
<div class="section">
    <b-jumbotron fluid :header="section.title" header-level="4">
        <div class="jumbotron-img">
            <img :src="section.images[0]">
        </div>
            <section-tabs :tabs="section.tabs"></section-tabs>
    </b-jumbotron>
    <b-container fluid>
        <b-card class="content-card" no-body>
            <content-tabs :tabs="section.tabs"></content-tabs>
            <div class="divider"></div>
            <b-container fluid class="section-content mt-5">
                <router-view></router-view>
            </b-container>
        </b-card>
    </b-container>
</div>
</template>

<script>
import ContentTabs from "./ContentTabs";
export default {
    name: 'ContentWrapper',
    props: [
        "section"
    ],
    components: {
        ContentTabs
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.jumbotron {
    position: relative;
    text-align: center;
    background-color: transparent;
    padding-top: 88px;
    padding-bottom: 168px;
    margin-bottom: -96px;
    z-index: 1;
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

.content-card {
    max-width: 95%;
    margin: auto;
    border: 0;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    -moz-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    z-index: 2;
}

.divider {
  height: 1.5px;
  border-radius: 50%;
  width: 90%;
  margin: auto;
  background-color: #F4F4F6;
}
</style>
