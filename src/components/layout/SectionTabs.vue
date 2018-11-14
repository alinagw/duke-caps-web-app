<template>
<b-nav class="content-tabs justify-content-center" fill>
    <b-nav-item v-for="(tab, key) in tabs" :key="tab.id" :to="tabPath(key)" class="text-center" :exact="key === 'home'">
        <div v-html="tab.icon" class="tab-icon"></div>
        <p class="mb-0">{{ tab.title }}</p>
    </b-nav-item>
</b-nav>
</template>

<script>
export default {
    name: 'SectionTabs',
    props: [
        "section",
        "tabs"
    ],
    data() {
        return {

        }
    },
    methods: {
        tabPath(tabKey) {
            if (tabKey == "home") {
                return "/" + this.section;
            }
            return "/" + this.section + "/" + tabKey;
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
    padding: 4px 8px;
    color: #78849E;
    transition: 0.3s;
}

.content-tabs .nav-item .tab-icon {
    width: 40px;
    height: 40px;
    margin: auto;
    margin-bottom: 6px;
}

.content-tabs .nav-item .tab-icon svg {
    height: 100%;
    fill: #78849E;
    transition: 0.3s;
}

.content-tabs .nav-link:hover .tab-icon svg{
    fill: #FFD960;
}

.content-tabs .nav-link.active .tab-icon svg, .content-tabs{
    fill: #38C6D4;
}
</style>
