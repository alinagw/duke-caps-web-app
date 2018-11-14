<template>
<div>
    <h1>Resources</h1>
    <p>
        These self-help pages are another dimension of our service to the Duke community. We realize that many members of the community may want to learn more about certain mental health topics or about overall well-being. Regardless of your reasons, we hope you find these pages and links helpful.
    </p>
    <p>For <strong>student resources</strong>, please check out the different sections of resources tailored to your specfic needs. If you're a parent or family member of a Duke student, you might want to check out the resources below.</p>
    <div class="divider"></div>
    <h1>Parents, Family, &amp; Friends Resources</h1>
    <b-card-group deck>
        <article-card v-for="(article, index) in parentsArticles" :key="index" :article="article">
        </article-card>
    </b-card-group>
</div>
</template>

<script>
import ArticleCard from "./../../content/ArticleCard"
import articlesJSON from "./../../../assets/data/articles.json"
export default {
    name: 'ResourcesHome',
    components: {
        ArticleCard
    },
    data() {
        return {
            articles: articlesJSON.articles

        }
    },
    computed: {
        parentsArticles() {
            var list = [];
            for (var article in this.articles) {
                if (this.articles[article].type === "parent") {
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
