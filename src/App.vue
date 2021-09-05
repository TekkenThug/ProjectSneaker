<template>
  <div id="app">
    <navbar :routes="routes" />
    <router-view></router-view>
  </div>
</template>

<script>
import {routesList} from "@/configs/router";

import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: { Navbar },

  data() {
    return {
      routes: routesList
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
