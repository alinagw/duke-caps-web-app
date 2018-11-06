<template>
  <div>
    <p>heyyyyy</p>
    <b-card-group deck>
      <staff-bio-card></staff-bio-card>
      <staff-bio-card></staff-bio-card>
      <staff-bio-card></staff-bio-card>
      <staff-bio-card></staff-bio-card>
      <staff-bio-card></staff-bio-card>
      <staff-bio-card></staff-bio-card>
    </b-card-group>
  </div>
</template>

<script>
import StaffBioCard from "./../../content/StaffBioCard"

export default {
  name: 'StaffBios',
  components: {
    StaffBioCard
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
