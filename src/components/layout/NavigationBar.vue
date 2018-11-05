<template>
<b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/about-us">About Us</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/get-started">Get Started</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/services">Our Services</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/resources">Resources</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
