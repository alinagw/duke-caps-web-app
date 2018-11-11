<template>
<b-navbar class="main-nav" toggleable="md" fixed="top" type="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand>
        <router-link to="/">boop</router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <li class="nav-item px-1">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item px-1">
                <router-link class="nav-link" to="/about-us">About Us</router-link>
            </li>
            <li class="nav-item px-1">
                <router-link class="nav-link" to="/get-started">Get Started</router-link>
            </li>
            <li class="nav-item px-1">
                <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item px-1">
                <router-link class="nav-link" to="/resources">Resources</router-link>
            </li>
            <!--<b-nav-form class="pl-3">
                <b-input-group>
                    <b-form-input type="text" placeholder="Search Resources" size="sm"></b-form-input>
                    <b-input-group-append>
                        <b-btn size="sm"><magnify></magnify></b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-nav-form>-->
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

<style>
.main-nav {
    background-color: #0F2F62;
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

.main-nav .nav-link.router-link-exact-active {
    color: #2FA4EE !important;
}
</style>
