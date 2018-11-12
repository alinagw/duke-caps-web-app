<template>
<b-nav class="content-tabs justify-content-center" fill>
    <b-nav-item v-for="(tab, key) in tabs" :key="tab.id" :to="tabPath(key)" class="text-center">
        <b-img :src="tab.icon" fluid></b-img>
        <p class="mb-0">{{ tab.title }}</p>
    </b-nav-item>
</b-nav>
</template>

<script>
export default {
    name: 'SectionTabs',
    props: [
        "tabs"
    ],
    data() {
        return {

        }
    },
    methods: {
        tabPath(tabKey) {
            if (tabKey == "home") {
                return "/" + this.$route.params.section;
            }
            return "/" + this.$route.params.section + "/" + tabKey;
        }
    }
}
</script>

<style>
.content-tabs {
    padding: 13px 16px;
}

@media (min-width: 1200px) {
    .content-tabs {
        width: 1200px;
    }
}

.content-tabs .nav-link {
    font-family: "Montserrat", "sans-serif";
    font-weight: 500;
    font-size: 11px;
    padding: 8px;
    color: #78849E;
    transition: 0.3s;
}

.content-tabs .nav-item img {
    width: 40px;
    margin-bottom: 6px;
}

.content-tabs .nav-link:hover {

}

.content-tabs .nav-link.active {

}
</style>
