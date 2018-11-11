<template>
  <div>
    <h1>About Us</h1>
    <p> 
      <b-img class="content-img" src="https://studentaffairs.duke.edu/sites/default/files/styles/medium/public/2017-08/wellness_tree_seal_rgb.png?itok=X5LOgZRK" right fluid rounded></b-img>
      CAPS helps Duke Students enhance strengths and develop abilities to successfully live, grow and learn in their personal and academic lives. We offer many services to Duke undergraduate, graduate, and professional students, including brief individual and group counseling, couples counseling and more. CAPS staff also provide outreach to student groups, particularly programs supportive of at-risk populations, on a wide range of issues impacting them in various aspects of campus life.
    </p>
    <p>
      CAPS is designed as a short-term care clinic. Therefore, we are limited in our ability to provide care for students needing long-term or more open-ended care.
    </p>
    <p>
      There are certain specialized services such as ADD/ADHD and treatment for Substance Use Disorders that are not available through CAPS.
    </p>
    <p>
      We do recognize that several our students will need longer term or a more specialized type of care and we have a strong network with area community providers for these.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResourcesEmergency',
  components: {

  },
  data () {
    return {
      
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
