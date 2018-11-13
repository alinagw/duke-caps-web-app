<template>
  <div>
    <h1>While You Wait</h1>
    <p> 
      If you are waiting for a CAPS appointment, feel free to check out our articles on <a :link="resources/student-wellbeing"></a>
    </p>
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
