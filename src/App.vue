<template>
  <div id="app">
    <navigation-bar></navigation-bar>
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

</style>
