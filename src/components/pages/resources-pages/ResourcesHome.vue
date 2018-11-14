<template>
  <div>
    <h1>Resources</h1>
    <p> 
      These self-help pages are another dimension of our service to the Duke community. We realize that many members of the community may want to learn more about certain mental health topics or about overall well-being. Regardless of your reasons, we hope you find these pages and links helpful.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResourcesHome',
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
