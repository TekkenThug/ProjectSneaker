<template>
  <ul class="navbar__list">
    <navbar-item
        v-for="route in routes"
        :key="route.link"
        :title="route.title"
        :link="route.link"
    />
  </ul>
</template>

<script>
import NavbarItem from './navbar-item';

export default {
  name: "navbar-list",
  components: { NavbarItem },
  props: {
    routes: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar__list {
    display: flex;
    font-size: 18px;

    .navbar__item {
      @include trans;

      &:hover {
        color: $white;
      }

      &:not(&:first-child) {
        margin-left: 30px;
      }
    }
  }
</style>