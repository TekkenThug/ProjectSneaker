<template>
  <li class="navbar__item">
    <router-link :to="link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'navbar-item',
  props: {
    name: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
