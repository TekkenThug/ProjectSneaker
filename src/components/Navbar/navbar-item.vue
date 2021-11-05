<template>
  <li
    @click="$emit('click')"
    class="navbar__item"
  >
    <router-link
      v-if="link"
      :to="link"
    >
      {{ name }}
    </router-link>

    <span v-else>
      {{ name }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    name: {
      required: true,
      type: String,
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>
