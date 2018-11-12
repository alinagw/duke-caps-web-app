<template>
<div>
    <h1>Meet Our Staff</h1>
    <p class="content-text">
        <b-img class="content-img" src="https://studentaffairs.duke.edu/sites/default/files/styles/carousel_a_image_xwide/public/2017-12/IMG_0483_5.jpg?itok=hFp3X1Pf" right fluid rounded></b-img>
        Our staff includes psychologists, clinical social workers, and psychiatrists experienced in working with college-age adults. From the everyday challenges of life, to more profound impairment or "interruption" of daily functioning, we recognize that any student may face some level of challenge at any point in their careers here at Duke. Our work is guided by sensitivity to the needs of a diverse student body.

    </p>
    <div class="divider"></div>
    <h1>Clinical Staff</h1>
    <b-card-group deck>
        <!--<staff-bio-card v-for="(employee, index) in clinicalStaff" :key="index" :employee="employee"></staff-bio-card>-->
        <staff-card v-for="(employee, index) in clinicalStaff" :key="index" :employee="employee"></staff-card>
    </b-card-group>
    <div class="divider"></div>
    <h1>Administrative Staff</h1>
    <b-card-group deck>
        <!--<staff-bio-card v-for="(employee, index) in adminStaff" :key="index" :employee="employee"></staff-bio-card>-->
        <staff-card v-for="(employee, index) in adminStaff" :key="index" :employee="employee"></staff-card>
    </b-card-group>
</div>
</template>

<script>
import staffJSON from './../../../assets/data/staff.json'
import StaffBioCard from "./../../content/StaffBioCard"
import StaffCard from "./../../content/StaffCard"

export default {
    name: 'AboutStaff',
    props: [],
    components: {
        StaffBioCard,
        StaffCard
    },
    data() {
        return {
            staff: staffJSON
        }
    },

    computed: {

        clinicalStaff() {
            return this.staff.clinical;
        },

        adminStaff() {
            return this.staff.administrative;
        }
    }
}
</script>

<style scoped>
.section-content .content-img {
    width: 100%;
    margin: 0 0 32px 0;
    transition: 0.3s;
}

@media (min-width: 992px) {
    .section-content .content-img {
      width: 50%;
      margin: 0 0 32px 32px;
    }

    .section-content .content-text {
      overflow: auto;
    }
}

@media (min-width: 1200px) {
    .section-content .content-img {
      width: 65%;
    }
}
</style>
