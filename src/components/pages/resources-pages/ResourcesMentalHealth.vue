<template>
<div>
    <h1>Mental Health Articles</h1>
    <p>Learn more about your mental health with the articles below.</p>
    <b-card-group deck>
        <article-card v-for="(article, index) in mentalHealthArticles" :key="index" :article="article">
        </article-card>
    </b-card-group>
</div>
</template>

<script>
import ArticleCard from "./../../content/ArticleCard"
import articlesJSON from "./../../../assets/data/articles.json"
export default {
    name: 'ResourcesMentalHealth',
    components: {
        ArticleCard
    },
    data() {
        return {
            articles: articlesJSON.articles

        }
    },
    computed: {
        mentalHealthArticles() {
            var list = [];
            for (var article in this.articles) {
                if (this.articles[article].type === "mental-health") {
                    list.push(this.articles[article]);
                }
            }
            return list;
        }
    }
}
</script>

<style scoped>
.section-content .content-img {
    width: 100%;
    margin: 0 0 32px 0;
    transition: 0.3s;
}

@media (min-width: 576px) {
    .section-content .content-img {
        width: 50%;
        margin: 0 0 32px 32px;
    }
}

@media (min-width: 992px) {
    .section-content .content-img {
        width: 30%;
    }
}
</style>
