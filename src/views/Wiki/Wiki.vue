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
  methods: {
    postSneakers(data) {
      this.$api.postSneakers(data);
    },
  },
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

  @media (max-width: $mobile) {
    .start {
      &__add-form {
        &::v-deep .add-form__field {
          flex: 0 0 100%;

          &:nth-child(2n) {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
