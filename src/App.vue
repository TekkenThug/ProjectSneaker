<template>
  <div id="app">
    <div class="app-view">
      <router-view />
    </div>
    <div class="app-view__alert-list" />
  </div>
</template>

<script>
import localState from '@/services/localState';

export default {
  name: 'App',

  created() {
    localState.initLocaleState(this.$i18n.locale);

    this.$i18n.locale = localStorage.getItem('locale');
  },
};
</script>

<style lang="scss" scoped>
.app-view {
  min-height: 100vh;
  padding: 40px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &__alert-list {
    position: fixed;
    max-width: $alertWidth;
    width: 100%;
    top: $navbarHeight + 40px;
    right: 20px;
    display: flex;
    flex-direction: column;

    &:empty {
      display: none;
    }

    &::v-deep > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: $mobileXS) {
  .app-view {
    &__alert-list {
      left: 20px;
      max-width: none;
      width: auto;
    }
  }
}
</style>
