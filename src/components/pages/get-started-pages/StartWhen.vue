<template>
  <div>
    <h1>When Can I Be Seen?</h1>
    <p>CAPS is open 9:00 am to 4:00 pm, Monday through Friday. You can drop by, no appointment necessary.
    </p>
    <p>If this is an <b-link to="/resources/emergency">emergency situation</b-link> in which your or another's immediate safety is at risk, please call Duke Police at 919-684-2444. If calling off campus, dial 9-1-1.</p>
    <p>If you have an urgent concern about yourself or another student after 5:00pm call the Dean on Call at 919-970-4169 or call 984-974-6303 and let the Health-link staff member know you were referred by Duke-CAPS.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutHome',
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
