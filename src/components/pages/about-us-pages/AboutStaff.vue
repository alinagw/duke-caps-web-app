<template>
  <div>
    <h1>Meet Our Staff</h1>
    <p>
      Our staff includes psychologists, clinical social workers, and psychiatrists experienced in working with college-age adults. From the everyday challenges of life, to more profound impairment or "interruption" of daily functioning, we recognize that any student may face some level of challenge at any point in their careers here at Duke. Our work is guided by sensitivity to the needs of a diverse student body. 
    </p>
    <div class="divider"></div>
    <h1>Clinical Staff</h1>
    <b-card-group deck>
      <staff-bio-card v-for="(employee, index) in clinicalStaff" :key="index" :employee="employee"></staff-bio-card>
    </b-card-group>
    <div class="divider"></div>
    <h1>Administrative Staff</h1>
    <b-card-group deck>
      <staff-bio-card v-for="(employee, index) in adminStaff" :key="index" :employee="employee"></staff-bio-card>
    </b-card-group>
  </div>
</template>

<script>
import staffJSON from './../../../assets/data/staff.json'
import StaffBioCard from "./../../content/StaffBioCard"

export default {
  name: 'AboutStaff',
  props: [
  ],
  components: {
    StaffBioCard
  },
  data () {
    return {
      staff: staffJSON
    }
  },

  computed: {

    clinicalStaff () {
      return this.staff.clinical;
    },

    adminStaff () {
      return this.staff.administrative;
    }
  }
}
</script>

<style>

</style>
