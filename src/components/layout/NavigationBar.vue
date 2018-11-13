<template>
<b-navbar class="main-nav" toggleable="md" fixed="top" type="dark">

    

    <b-navbar-brand>
        <router-link to="/">boop</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" id="nav_collpase-toggle"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/about-us">About Us</b-nav-item>
            <b-nav-item to="/get-started">Get Started</b-nav-item>
            <b-nav-item to="/services">Services</b-nav-item>
            <b-nav-item to="/resources">Resources</b-nav-item>
            <b-nav-item to="/search" class="search-icon"><magnify></magnify></b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
import Magnify from "vue-material-design-icons/Magnify.vue"

export default {
    name: 'NavigationBar',
    components: {
        Magnify
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.main-nav {
    background-color: #0F2B5B;
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);
}

.main-nav .nav-link {
    color: white !important;
    font-family: "Montserrat", "sans-serif";
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s;
}

.main-nav .nav-link:hover {
    color: #2FA4EE !important;
}

.main-nav .nav-link.active {
    color: #2FA4EE !important;
}

.main-nav .search-icon a {
    font-size: 18px;
    height: 34px;
}

.main-nav .search-icon a .magnify-icon {
    bottom: 0.15rem;
}
</style>
