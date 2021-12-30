<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img
        src="/images/logo.png"
        alt="logotype"
      >
    </div>
    <navbar-list />
  </div>
</template>

<script>
import NavbarList from './navbar-list';

export default {
  name: 'Navbar',

  components: { NavbarList },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables";

  .navbar {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: $color-4;
    z-index: 1000;
    max-height: $navbarHeight;

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
