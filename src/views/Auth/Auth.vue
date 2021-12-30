<template>
  <div class="auth">
    <div
      class="auth__bg"
      style="background-image: url('/images/auth-bg.png')"
    />
    <div class="auth__content">
      <div class="auth__content-inner">
        <img
          src="/images/logo.png"
          alt="logotype"
        >
        <transition
          name="slide"
          mode="out-in"
        >
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Auth',
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables";

  .auth {
    width: 100%;
    display: flex;

    &__bg {
      flex: 0 1 60%;
      display: flex;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      &::before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba($color-0, .3);
      }
    }

    &__content {
      flex: 1 1 50%;
      padding: 60px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: $mobileXS) {
        padding: 60px 20px;
      }

      &-inner {
        max-width: 300px;
        width: 100%;
      }
    }
  }
</style>
