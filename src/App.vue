<template>
<div id="app">
    <navigation-bar></navigation-bar>
    <div class="nav-spacer"></div>
    <router-view></router-view>
    <contact-us-footer></contact-us-footer>
</div>
</template>

<script>
import NavigationBar from "./components/layout/NavigationBar"
import ContactUsFooter from "./components/layout/ContactUsFooter"

export default {
    name: 'app',
    components: {
        NavigationBar,
        ContactUsFooter
    }
}
</script>

<style>
#app {
    background-color: #F7F7FA;
    overflow-x: hidden;
}

.nav-spacer {
    height: 56px;
}
</style>
