<template>
  <div class="wiki">
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Wiki',
};
</script>

<style lang="scss" scoped>
  .wiki {
    text-align: center;
    max-width: 960px;
    width: 100%;
    display: flex;
    justify-content: center;

    .slide-enter-active, .slide-leave-active {
      transition: all .5s;
    }
    .slide-enter, .slide-leave-to {
      position: absolute;
      opacity: 0;
      transform: translateX(-50px);
    }
  }
</style>
