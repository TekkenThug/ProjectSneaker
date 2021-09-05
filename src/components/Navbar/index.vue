<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img src="" alt="logotype">
    </div>
    <navbar-list :routes="routes"/>
  </div>
</template>

<script>
import NavbarList from "./navbar-list"

export default {
  name: "Navbar",
  components: { NavbarList },
  data() {
    return {
      routes: [
        {
          title: "News",
          link: "/news"
        },
        {
          title: "Wiki",
          link: "/wiki"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid $orange;
  }
</style>