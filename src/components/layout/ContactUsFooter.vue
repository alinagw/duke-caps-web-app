<template>
<b-container fluid class="footer">
    <b-row class="d-flex align-items-start py-5">
        <b-col class="col-md-3 mx-auto">
            logo and social media friends
        </b-col>
        <b-col class="col-md-3 col-lg-4 mx-auto">
            <h6>Helpful Links</h6>
        </b-col>
        <b-col class="col-md-6 col-lg-5 mx-auto">
            <h6>Contact</h6>
            <p>
                <phone></phone>
                Phone: (919) 660-1000
            </p>
            <p>
                <printer></printer>
                Fax: (919) 660-1024
            </p>
            <p>
                <home></home>
                Address: Duke Student Wellness Center
                CAPS | 3rd Floor
                305 Towerview Road
                Durham, NC 27708
            </p>
            <p>
                <clock></clock>
                Hours: Monday; Wednesday; Thursday; Friday: 8:00am - 5:00pm
                Tuesday: 8:00am - 7:00pm
            </p>
        </b-col>
    </b-row>
    <b-row class="copyright">
      <b-col class="col-md-6 text-center text-md-right">
        <p>&copy; 2018 Alina Walling, Kris Elbert, &amp; Andres Hernandez</p>
      </b-col>
      <b-col class="col-md-6 text-center text-md-left">
        <p>This website is NOT officially affiliated with Duke University.</p>
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
  font-size: 12px;
  font-weight: 600;
}
</style>
