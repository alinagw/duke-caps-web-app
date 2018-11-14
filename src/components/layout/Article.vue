<template>
<div class="article">
    <b-jumbotron fluid :header="article.title" header-level="4">
        <b-link class="article-back-button" @click="$router.go(-1)">
            <arrow-left class="article-back-arrow"></arrow-left>
            </b-link>
        <div class="jumbotron-img">
            <img :src="article.image">
        </div>
    </b-jumbotron>
    <b-container fluid>
        <b-card class="content-card" no-body>
            <b-container fluid class="article-content">
                <component :is="articleComponent"></component>
            </b-container>
        </b-card>
    </b-container>
</div>
</template>

<script>
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue"
export default {
    name: 'Article',
    props: [
        "article"
    ],
    components: {
        ArrowLeft,
        ArticleAdjustCollege: () => import("./../pages/article-pages/ArticleAdjustCollege"),
        ArticleAntiDepressants: () => import("./../pages/article-pages/ArticleAntiDepressants"),
        ArticleBeingEmotional: () => import("./../pages/article-pages/ArticleBeingEmotional"),
        ArticleConflict: () => import("./../pages/article-pages/ArticleConflict"),
        ArticleCopingStress: () => import("./../pages/article-pages/ArticleCopingStress"),
        ArticleDepression: () => import("./../pages/article-pages/ArticleDepression"),
        ArticleDisorderedEating: () => import("./../pages/article-pages/ArticleDisorderedEating"),
        ArticleDisorderedEatingHowHelp: () => import("./../pages/article-pages/ArticleDisorderedEatingHowHelp"),
        ArticleDisorderedEatingTerms: () => import("./../pages/article-pages/ArticleDisorderedEatingTerms"),
        ArticleDisorderedEatingUnderstand: () => import("./../pages/article-pages/ArticleDisorderedEatingUnderstand"),
        ArticleDisorderedEatingWhatSay: () => import("./../pages/article-pages/ArticleDisorderedEatingWhatSay"),
        ArticleFirstYearConcerns: () => import("./../pages/article-pages/ArticleFirstYearConcerns"),
        ArticleGriefLoss: () => import("./../pages/article-pages/ArticleGriefLoss"),
        ArticleLivingLifeValues: () => import("./../pages/article-pages/ArticleLivingLifeValues"),
        ArticleRelationshipsGradSchool: () => import("./../pages/article-pages/ArticleRelationshipsGradSchool"),
        ArticleSemesterSurvivalGuide: () => import("./../pages/article-pages/ArticleSemesterSurvivalGuide"),
        ArticleParentingDistance: () => import("./../pages/article-pages/ArticleParentingDistance"),
        ArticleParentingInternational: () => import("./../pages/article-pages/ArticleParentingInternational")
    },
    data() {
        return {

        }
    },
    computed: {
        articleComponent () {
            if (this.article.hasOwnProperty("children")) {
                if (this.article.children.hasOwnProperty(this.$route.params.subpage)) {
                    return this.article.children[this.$route.params.subpage];
                }
            }
            return this.article.component;
        }
    }
}
</script>

<style>
.article {
    margin-bottom: 64px;
}

.article-content {
    padding: 48px 8% 48px 8%;
    color: #454F63;
    position: relative;
}

.article-content a:not(.btn) {
    color: #38C6D4;
    transition: 0.3s;
    font-weight: 400;
}

.article-content a:not(.btn):hover {
    color: #1f7998;
    text-decoration: none;
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

    .article-content,
    .content-card {
        width: 1200px;
        max-width: 1200px;
    }
}

.article .jumbotron {
    position: relative;
    text-align: center;
    background-color: transparent;
    padding-top: 104px;
    padding-bottom: 184px;
    margin-bottom: -96px;
    z-index: 1;
    overflow: hidden;
}

.article .jumbotron h1 {
    color: white;
    font-family: "Scope One", "serif";
    font-weight: bolder;
    font-size: 64px;
    letter-spacing: 4px;
    margin-bottom: 0;
}

.article .jumbotron-img {
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    z-index: -1;
    overflow: hidden;
}

.article .jumbotron img {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    object-fit: cover;
    object-position: top;
    filter: blur(3px) brightness(65%);
    overflow: hidden;
}

.article-back-button {
    position: absolute;
    top: 24px;
    left: 24px;
    text-transform: uppercase;
    font-family: "Montserrat", "sans-serif";
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.5px;
    transition: 0.3s;
    color: white;
}

.article-back-button:hover {
    text-decoration: none;
    color: #3EA6E8;
}

.article-content h1 {
    font-family: "Scope One", "serif";
    margin-bottom: 24px;
    color: #1D222D;
}

.article-content h4 {
    font-family: "Montserrat", "sans-serif";
    color: #7A859C;
    margin-top: 28px;
}

.article-content p,
.article-content ul,
.article-content ol {
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

.article-content .divider {
    width: 100%;
    margin: 32px 0;
}
.scroll-spy-col {
    margin-left: -6%;
}

.article-scroll-menu {
    font-size: 13px !important;
    position: sticky;
    top: 72px;
    margin-right: 24px;
    border-right: 1.5px solid #F4F4F6;
    border-radius: 0;
}

.article-scroll-menu-item {
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #7B859B;
    transition: all 0.3s;
    font-weight: 400;
}

.article-scroll-menu-item a {
    color: #7B859B !important;
    transition: all 0.3s;
    font-weight: 400;
}

.article-scroll-menu-item:first-child a {
    font-weight: 700;
}

.article-scroll-menu-item:hover a {
    color: #454F63 !important;
}

.article-scroll-menu-item.active {
    background-color: transparent;
    color: #37A5EB !important;
}

.article-scroll-menu-item.active a {
    color: #37A5EB !important;
}
</style>
