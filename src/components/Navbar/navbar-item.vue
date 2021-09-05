<template>
  <li>
    <a :href="link">{{ title }}</a>
  </li>
</template>

<script>
export default {
  name: "navbar-item",
  props: {
    title: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>