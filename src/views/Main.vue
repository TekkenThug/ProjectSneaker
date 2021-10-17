<template>
  <div class="main">
    <navbar :routes="handlingRoutes" />
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
      isAuth: false,
    };
  },
  created() {
    this.$api.auth.checkAuth(localStorage.getItem('token'))
      .then(() => {
        this.isAuth = true;
      });
  },
  computed: {
    handlingRoutes() {
      return !this.isAuth ? this.routes.filter((route) => !route.auth) : this.routes;
    },
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
  padding: ($navbarHeight + 40px) 40px 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__view {
    max-width: 720px;
  }
}
</style>
