<template>
  <div
    class="swiper"
    ref="swipeSlider"
  >
    <div class="swiper-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Slider',

  data() {
    return {
      /**
       * Swiper instance
       * @type {Swiper}
       */
      swiperInstance: null,
    };
  },

  mounted() {
    /** Creating swiper instance */
    this.swiperInstance = new Swiper(this.$refs.swipeSlider, {
      spaceBetween: 50,
      centeredSlides: true,
    });
  },
};
</script>

<style lang="scss">
  @import "~@/styles/variables";

  .swiper {
    max-width: 500px;

    @media (max-width: $mobile) {
      max-width: 300px;
    }

    &-slide {
      height: auto;
    }
  }
</style>
