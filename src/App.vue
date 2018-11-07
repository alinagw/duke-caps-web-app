<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div class="nav-spacer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/layout/NavigationBar"

export default {
  name: 'app',
  components: {
    NavigationBar
  }
}
</script>

<style>
.nav-spacer {
  height: 56px;
}

</style>
