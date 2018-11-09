<template>
  <b-card class="section-tabs-card" no-body>
  <b-nav class="justify-content-center" fill>
    <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
      <router-link class="nav-link text-center" :to="tab.src">
        <b-img :src="tab.icon" fluid></b-img>
        <p class="mb-0">{{ tab.title }}</p>
      </router-link>
    </li> 
  </b-nav>
</b-card>

</template>

<script>
export default {
  name: 'SectionTabs',
  props: [
    "tabs"
  ],
  data () {
    return {
    }
  }
}
</script>

<style>
.section-tabs-card {
  max-width: 90%;
  margin: auto;
  border: none;
  border-radius: 8px;
  -webkit-box-shadow: 0px 2px 10px 0px rgba(69,91,99,0.45);
  -moz-box-shadow: 0px 2px 10px 0px rgba(69,91,99,0.45);
  box-shadow: 0px 2px 10px 0px rgba(69,91,99,0.45);
}

@media (min-width: 1200px) {
    .section-tabs-card {
      width: 1200px;
    }
}

.section-tabs-card .nav-link {
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
  font-size: 11px;
}

.section-tabs-card .nav-item img {
  width: 40px;
  margin-bottom: 6px;
}

</style>
