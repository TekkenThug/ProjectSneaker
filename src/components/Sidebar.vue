<template>
  <div class="sidebar">
    <div class="sidebar__item">
      <div class="sidebar__item-img">
        <img src="" alt="">
      </div>
      <div class="sidebar__item-bottom">
        <h3 class="sidebar__item-title">
          Nike Dunk
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style lang="scss" scoped>
  .sidebar {
    max-width: $sidebarWidth;
    width: 100%;
    border: 2px solid $orange;
    padding: 10px;
  }
</style>