<template>
    <b-card class="quicklink-card text-center" @click="$router.push(link.link)">
        <div class="quicklink-image" v-html="link.icon"></div>
        <h5 class="card-title mb-1">{{ link.title }}</h5>
        <p class="card-text small mb-0">{{ link.description }}</p>
    </b-card>
</template>

<script>
    export default {
        name: 'HomeQuicklinkCard',
        props: [
            "link"
        ],
        data() {
            return {}
        }
    }
</script>

<style>
    .quicklink-card {
        margin: 0 8px 16px 8px !important;
        min-width: calc(50% - 16px);
        border: none;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
        -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
        box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
        transition: 0.5s;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .quicklink-card {
            min-width: calc(25% - 16px);
        }
    }

    .quicklink-card:hover {
        -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
        -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
        box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    }

    .quicklink-image {
        width: 80px;
        height: 80px;
        margin: auto;
        margin-bottom: 12px;
    }

    .quicklink-image svg {
        height: 100%;
        fill: #38C6D4;
        transition: 0.6s ease;
    }

    .quicklink-card:hover .quicklink-image svg {
        fill: #FFD960;
    }

    .quicklink-card .card-title {
        color: #0F2B5B;;
    }

    .quicklink-card .card-text {
        color: #79859D;
    }
</style>
