<template>
<div id="app">
    <navigation-bar></navigation-bar>
    <div class="nav-spacer"></div>
    <router-view></router-view>
</div>
</template>

<script>
import NavigationBar from "./components/layout/NavigationBar"

export default {
    name: 'app',
    components: {
        NavigationBar
    }
}
</script>

<style>
.nav-spacer {
    height: 56px;
}

.section-content {
    padding: 0 8% 2% 8%;
}

@media (min-width: 1200px) {
    .section-content {
      width: 1200px;
    }
}

.section-content h1 {
    font-family: "Scope One", "serif";
    margin-bottom: 24px;
}

.section-content p {
    font-family: "Montserrat", "sans-serif";
    font-weight: 300;
    font-size: 15px;
}

.section-content .divider {
    width: 100%;
    height: 2px;
    background-color: #F4F4F6;
    margin: 32px 0;
}
</style>
