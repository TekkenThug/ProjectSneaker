<template>
  <div id="app">
    <navbar :routes="routes" />
    <div class="app-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import routesList from '@/configs/router';

import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: { Navbar },

  data() {
    return {
      routes: routesList,
    };
  },
};
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .app-view {
    min-height: 100vh;
    padding: ($navbarHeight + 40px) 40px 40px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
