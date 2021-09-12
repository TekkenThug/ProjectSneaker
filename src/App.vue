<template>
  <div id="app">
    <navbar :routes="routes" />
    <div class="app-view">
      <router-view />
    </div>
    <alert
      msg-type="error"
      title="Testing message"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum, cumque cupiditate debitis dolore esse nam
      nisi quia ratione sunt! Ipsa nemo non odit omnis possimus quae, saepe similique tempora.
    </alert>
  </div>
</template>

<script>
import routesList from '@/configs/router';

import Navbar from '@/components/Navbar';
import Alert from '@/components/Alert';

export default {
  name: 'App',
  components: { Navbar, Alert },

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
