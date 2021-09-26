<template>
  <div class="main">
    <navbar :routes="routes" />
    <div class="main__view">
      <router-view />
    </div>
  </div>
</template>

<script>
import routesList from '@/configs/router';

import Navbar from '@/components/Navbar';

export default {
  name: 'Main',
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

.main {
  padding-top: $navbarHeight;
}
</style>
