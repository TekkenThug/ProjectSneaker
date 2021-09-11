<template>
  <div
    class="card"
    :style="{
      backgroundImage: `url(${productInfo.image})`
    }"
  >
    <div class="card__info">
      <h3 class="card__title">
        {{ productInfo.name }} / {{ productInfo.vendorCode }}
      </h3>
      <div class="card__vendor-code">
        Артикул: {{ productInfo.vendorCode }}
      </div>
      <div class="card__avrg-price">
        Дата релиза: {{ productInfo.releaseDate }}
      </div>
    </div>
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
          vendorCode: '',
          averagePrice: 0,
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 300px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &::before {
      @include trans;

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;
      background-color: rgba($color-0, .3);
    }

    &__info {
      @include trans;

      position: relative;
      z-index: 1;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 10px 15px;
      text-align: left;
      transform: translate(0, 70px);
      color: $color-1;
    }

    &__title {
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    &:hover {
      &::before {
        background-color: rgba($color-0, .5);
      }

      .card__info {
        background-color: $color-4;
        color: $color-0;

        transition: transform .3s ease;
        transform: translate(0, 0);
      }
    }
  }
</style>
