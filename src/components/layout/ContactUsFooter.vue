<template>
<b-container fluid class="footer px-5">
    <b-row class="d-flex align-items-start py-5 text-center text-md-left">
        <b-col class="col-12 col-md-3 mx-auto">
            logo and social media friends
        </b-col>
        <b-col class="col-12 col-md-3 col-lg-4 mx-auto">
            <h6>Helpful Links</h6>
        </b-col>
        <b-col class="col-12 col-md-6 col-lg-5 mx-auto">
            <h6>Contact</h6>
            <b-container class="px-0">
                <b-row>
                    <b-col class="col-1">
                        <phone></phone>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1">Phone</p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p>(919) 660-1000</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="col-1">
                        <printer></printer>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1">Fax</p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p>(919) 660-1024</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="col-1">
                        <home></home>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1">Address</p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p class="mb-0">
                            Duke Student Wellness Center
                        </p>
                        <p class="mb-0">
                            CAPS | 3rd Floor
                        </p>
                        <p class="mb-0">
                            305 Towerview Road
                        </p>
                        <p>
                            Durham, NC 27708
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="col-1">
                        <clock></clock>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1">Hours</p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p class="mb-0">
                            Mon, Wed, Thurs, Fri: 8:00am - 5:00pm
                        </p>
                        <p>
                            Tues: 8:00am - 7:00pm
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
    </b-row>
    <b-row>
        <b-col class="col-12 col-md-6 text-center text-md-right">
            <p class="copyright mb-1 mb-md-3">&copy; 2018 Alina Walling, Kris Elbert, &amp; Andres Hernandez</p>
        </b-col>
        <b-col class="col-12 col-md-6 text-center text-md-left">
            <p class="copyright mb-2">This website is NOT affiliated with Duke University.</p>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import Phone from "vue-material-design-icons/Phone.vue"
import Printer from "vue-material-design-icons/Printer.vue"
import Home from "vue-material-design-icons/Home.vue"
import Clock from "vue-material-design-icons/Clock.vue"

export default {
    name: 'ContactUsFooter',
    components: {
        Phone,
        Printer,
        Home,
        Clock
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.footer {
    background-color: lightblue;
    font-family: "Montserrat", "sans-serif";
}

.footer h6 {
    font-size: 18px;
    margin-bottom: 20px;
}

.footer p {
    font-weight: 300;
}

.copyright {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 500 !important;
}
</style>
