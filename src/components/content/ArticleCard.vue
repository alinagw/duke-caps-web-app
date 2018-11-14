<template>
<b-card :img-src="article.image" :img-alt="article.title" img-top img-fluid class="article-card" no-body>
    <b-card-body>
        <h4 class="card-title">{{ article.title }}</h4>
        <p class="card-text" style="font-weight:300;">
            {{ article.description }}
        </p>
    </b-card-body>
    <b-card-footer class="text-right">
        <b-btn class="article-read-button" :to="articlePath">
            Read
            <arrow-right class="article-read-arrow"></arrow-right>
        </b-btn>
    </b-card-footer>
</b-card>
</template>

<script>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue"

export default {
    name: 'ArticleCard',

    props: [
        "article"
    ],

    components: {
        ArrowRight
    },

    data() {
        return {

        }
    },

    computed: {
        articlePath() {
            return "/article/" + this.article.id;
        }
    },

    methods: {}
}
</script>

<style>
.article-card {
    border: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    margin-bottom: 30px !important;
    transition: all 0.3s;
    transition: box-shadow 0.5s;
    font-family: "Montserrat", "sans-serif";
    min-width: calc(100% - 30px);
    max-width: calc(100% - 30px);
}

@media (min-width: 576px) {
    .article-card {
        min-width: calc(50% - 30px);
        max-width: calc(50% - 30px);
    }
}

@media (min-width: 992px) {
    .article-card {
        min-width: calc(33% - 30px);
        max-width: calc(33% - 30px);
    }
}

.article-card .card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.article-card:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}

.article-card .card-title {
    font-weight: 400;
    font-size: 20px;
    color: #1D222C;
}

.article-card .card-subtitle {
    font-size: 17px;
    color: #79859D;
}

.article-card .card-text {
    font-size: 14px;
    color: #454F63;
}

.article-card .card-footer {
    background-color: transparent;
    border: none;
}

.article-card a.card-text {
    color: #2DC6D6;
    font-size: 16px;
    font-weight: 600;
    user-select: none;
    transition: 0.3s;
}

.article-card a.card-text:hover {
    color: #1f7998;
    text-decoration: none;
}

.article-read-button,
.article-read-button:focus {
    border: none;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 32px;
    background-color: #2DC6D6;
    box-shadow: none;
}

.article-read-button .article-read-arrow {
    font-size: 20px;
    height: 12px;
}

.article-read-button .article-read-arrow svg {
    bottom: -0.38rem;
}

.article-read-button:hover {
    background-color: #1f7998;
    box-shadow: none;
}

.article-read-button.disabled,
.article-read-button:disabled {
    background-color: #E2E4EB;
    color: #79859D;
}
</style>
