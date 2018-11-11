<template>
  <b-nav class="content-tabs justify-content-center" fill>
    <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
      <router-link class="nav-link text-center" :to="tab.src">
        <b-img :src="tab.icon" fluid></b-img>
        <p class="mb-0">{{ tab.title }}</p>
      </router-link>
    </li> 
  </b-nav>
</template>

<script>
export default {
  name: 'ContentTabs',
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
.content-tabs {
  padding: 13px 16px;
}

@media (min-width: 1200px) {
    .content-tabs {
      width: 1200px;
    }
}

.content-tabs .nav-link {
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
  font-size: 11px;
  padding: 8px;
}

.content-tabs .nav-item img {
  width: 40px;
  margin-bottom: 6px;
}

</style>
