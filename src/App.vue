<template>
<div id="app">
    <navigation-bar></navigation-bar>
    <div class="nav-spacer"></div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
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
}

.nav-spacer {
    height: 56px;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
