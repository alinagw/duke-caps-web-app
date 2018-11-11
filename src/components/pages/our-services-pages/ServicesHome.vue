<template>
  <div>
    <h1>Our Services</h1>
    <p> 
      <b-img class="content-img" src="https://studentaffairs.duke.edu/sites/default/files/styles/medium/public/2017-08/wellness_tree_seal_rgb.png?itok=X5LOgZRK" right fluid rounded></b-img>
      We provide a wide range of services, all covered through the Student Health Fee, that meets the mental health and student development needs of Duke students.  We don’t simply understand those needs in terms of individual students.  We also recognize the importance of addressing the life issues of particular student communities and the campus community, overall.
    </p>
    <p>
      In terms of individual clinical issues, staff members provide confidential assessment and brief counseling/therapy for students whose concerns range from the normal challenges of everyday life to more disruptive psychological concerns to concerns about friends or family members.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServicesHome',
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
      width: 45%;
      margin: 0 0 32px 32px;
    }
}

@media (min-width: 992px) {
    .section-content .content-img {
      width: 30%;
    }
}

</style>
