<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img
        src="/images/logo.png"
        alt="logotype"
      >
    </div>
    <navbar-list :routes="routes" />
  </div>
</template>

<script>
import NavbarList from './navbar-list';

export default {
  name: 'Navbar',
  components: { NavbarList },

  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: $color-4;

    &__logo {
      max-width: 120px;
      padding-bottom: 5px;
    }

    &__list {
      font-weight: 900;
      text-transform: uppercase;
    }
  }
</style>
