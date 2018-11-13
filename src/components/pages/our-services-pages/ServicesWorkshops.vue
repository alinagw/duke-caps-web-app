<template>
  <div>
    <h1>Workshops &amp; Discussions</h1>
    <p class="mb-4"> 
      CAPS offers a variety of programs and workshops geared toward students' every day life experiences, covering a variety of topics related to student development and personal growth. These programs and workshops all have in common a commitment to providing students the knowledge and variety of life skills important for surviving and thriving here at Duke and beyond.
    </p>
    <b-card-group deck>
        <workshop-card v-for="(workshop, index) in workshops" :key="index" :service="workshop"></workshop-card>
    </b-card-group>
  </div>
</template>

<script>
import WorkshopCard from "./../../content/WorkshopCard"
import servicesJSON from "./../../../assets/data/services.json"

export default {
  name: 'ServicesWorkshops',
  components: {
    WorkshopCard
  },
  data () {
    return {
      workshops: servicesJSON.workshopsDiscussions
    }
  }
}
</script>

<style scoped>


</style>
