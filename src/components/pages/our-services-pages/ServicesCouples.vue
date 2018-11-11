<template>
  <div>
    <h1>Couples Counseling</h1>
    <p> 
      CAPS offers couples counseling to Duke students and their partners struggling with frequent conflicts, problems in communication, loss of intimacy, or difficulty managing a shared crisis. The main goal is to help couples gain clarity on the direction of the relationship moving forward. In some cases, couples decide to continue the relationship and enjoy growth and greater closeness as a result of the counseling experience. In other cases, counseling helps couples reach decisions to end their relationship but do in a way that still promotes growth, respect, and appreciation for each other.
    </p>
    <p>
      CAPS offers couples counseling to all students, regardless of marital status or sexual orientation. At least one member of the couple seeking couples counseling must be a Duke student.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServicesCouples',
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
