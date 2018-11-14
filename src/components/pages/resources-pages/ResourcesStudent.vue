<template>
  <div>
    <h1>Student Wellbeing Articles</h1>
      <p>These self-help pages are another dimension of our service to the Duke community. We realize that many members of the community may want to learn more about overall well-being. Regardless of your reasons, we hope you find these pages and links helpful.</p>
    <b-card-group deck>
        <article-card v-for="(article, index) in studentArticles" :key="index" :article="article">
        </article-card>
    </b-card-group>
  </div>
</template>

<script>
import ArticleCard from "./../../content/ArticleCard"
import articlesJSON from "./../../../assets/data/articles.json"
export default {
  name: 'ResourcesStudent',
  components: {
    ArticleCard
  },
  data() {
        return {
            articles: articlesJSON.articles

        }
    },
    computed: {
        studentArticles() {
            var list = [];
            for (var article in this.articles) {
                if (this.articles[article].type === "student") {
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
