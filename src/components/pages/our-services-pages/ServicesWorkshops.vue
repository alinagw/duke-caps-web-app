<template>
  <div>
    <h1>Workshops &amp; Discussions</h1>
    <p> 
      CAPS offers a variety of programs and workshops geared toward students' every day life experiences, covering a variety of topics related to student development and personal growth. These programs and workshops all have in common a commitment to providing students the knowledge and variety of life skills important for surviving and thriving here at Duke and beyond.
    </p>
    <div class="divider"></div>
    <h1>Available Workshops</h1>
    <b-card-group deck>
        <service-card v-for="(workshop, index) in workshops" :key="index" :service="workshop"></service-card>
    </b-card-group>
  </div>
</template>

<script>
import ServiceCard from "./../../content/ServiceCard"
import servicesJSON from "./../../../assets/data/services.json"

export default {
  name: 'ServicesWorkshops',
  components: {
    ServiceCard

  },
  data () {
    return {
      workshops: servicesJSON.workshopsDiscussions
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

@media (min-width: 576px) { 
  .section-content .content-img {
      width: 50%;
      margin: 0 0 32px 32px;
    }
}

@media (min-width: 992px) {
    .section-content .content-img {
      width: 30%;
    }
}

</style>
