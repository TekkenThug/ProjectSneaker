<template>
  <div
    class="card"
    :style="{
      backgroundImage: `url('/images/tmp-sneaker.jpeg')`
    }"
  >
    <h3 class="card__title">
      {{ productInfo.name }} / {{ productInfo.colorway }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    productInfo: {
      type: Object,
      default() {
        return {
          image: '',
          name: '',
          colorway: '',
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    @include trans;

    border-radius: 15px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    color: $color-1;

    &:hover {
      color: $color-5;
    }

    &::before {
      @include trans;

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;
      background: rgba($color-0, .4);
    }

    &:hover::before {
      background: $color-4;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
    }
  }
</style>
