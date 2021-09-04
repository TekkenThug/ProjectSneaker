<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img src="" alt="logotype">
    </div>
    <ul class="navbar__items">
      <li><a href="">First</a></li>
      <li><a href="">First</a></li>
      <li><a href="">First</a></li>
      <li><a href="">First</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid $orange;

    &__items {
      display: flex;
      font-size: 18px;

      li {
        &:not(&:first-child) {
          margin-left: 30px;
        }
      }
    }
  }
</style>