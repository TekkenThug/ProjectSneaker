<template>
  <div id="app">
    <navbar :routes="routes" />
    <div class="app-view">
      <router-view />
    </div>
    <div class="app-view__alert-list" />
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

  &__alert-list {
    position: fixed;
    max-width: $alertWidth;
    width: 100%;
    top: $navbarHeight + 40px;
    right: 20px;
    display: flex;
    flex-direction: column;

    &:empty {
      display: none;
    }

    &::v-deep > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: $mobileXS) {
  .app-view {
    &__alert-list {
      left: 20px;
      max-width: none;
      width: auto;
    }
  }
}
</style>
