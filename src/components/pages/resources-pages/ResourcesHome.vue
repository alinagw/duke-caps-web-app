<template>
    <div>
        <h1>Resources</h1>
        <p>
            These self-help pages are another dimension of our service to the Duke community. We realize that many members of the community may want to learn more about certain mental health topics or about overall well-being. Regardless of your reasons, we hope you find these pages and links helpful.
        </p>
        <p>For <strong>student resources</strong>, please check out the different sections of resources tailored to your specfic needs. If you're a parent or family member of a Duke student, you might want to check out the resources below.</p>
        <div class="divider"></div>
        <h1>Resources for Parents, Family, and Friends</h1>
        <p>Parents, siblings, friends, roommates, and romantic partners are often the first to notice that a student is struggling.  However, it is often difficult to determine the best way to help the student. We are available to talk you through some of your concerns and answer some of the questions you might have about how to approach a struggling student.</p>
        <p>Some common reasons for using our Consultation Services include:</p>
        <ul>
            <li>Concern that a student is showing signs of impairment in daily functioning</li>
            <li>questions about a student’s development (academically or socially)</li>
            <li>alarm that a student is showing indications of self-destructive or unusual behaviors</li>
            <li>concern about a student whose family is experiencing a crisis</li>
            <li>need for information about referrals for more specialized services in the community</li>
        </ul>
        <p>If you are concerned about a student and wish to speak with a mental health professional, please call (919) 660-1000.</p>

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
