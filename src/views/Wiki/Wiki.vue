<template>
  <div class="wiki">
    <transition
      mode="out-in"
      name="slide"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Wiki',
};
</script>

<style lang="scss">
  .wiki {
    text-align: center;
    max-width: 960px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
