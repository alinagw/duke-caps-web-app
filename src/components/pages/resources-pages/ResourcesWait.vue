<template>
  <div>
    <h1>While You Wait</h1>
    <p> 
      If you are waiting for a CAPS appointment, feel free to check out our articles on <b-link to="/resources/student-wellbeing">student wellbeing</b-link> and <b-link to="/resources/mental-health">mental health.</b-link>
    </p>

    <h4><a href="http://screening.mentalhealthscreening.org/dukeed" target="_blank">Anonymous Screening Test</a></h4>
    <p>To gain more insight into whether you would benefit from mental health services, <a href="http://screening.mentalhealthscreening.org/dukeed" target="_blank">click here</a>. This brief screening is purely educational, not diagnostic, but it may give you the validation and confidence you need to set up an appointment with CAPS.</p>

  </div>
</template>

<script>
export default {
  name: 'ResourcesWait',
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
