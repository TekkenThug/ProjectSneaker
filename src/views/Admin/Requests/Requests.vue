<template>
  <div class="requests">
    <div v-if="isLoading">
      <preloader />
    </div>

    <div
      v-else-if="pairs.length"
      class="requests__items"
    >
      <slider>
        <request-item
          v-for="pair in pairs"
          @resolving="sendResolveOfApplication($event, pair.id)"
          class="requests__item swiper-slide"
          :key="pair.id"
          :sneaker-data="pair"
        />
      </slider>
    </div>

    <div v-else>
      {{ $t('Sneakers not found') }}
    </div>
  </div>
</template>

<script>
import Slider from '@/components/UI/Slider';
import RequestItem from '@/components/RequestItem';

export default {
  name: 'Requests',
  components: { RequestItem, Slider },
  data() {
    return {
      /**
       * Loading state
       * @type {boolean}
       */
      isLoading: true,

      /**
       * Available pairs
       * @type {object[]}
       */
      pairs: [],
    };
  },
  mounted() {
    /** Get pairs */
    this.sendRequestForGetApplication();
  },
  methods: {
    /**
     * Send resolving
     * @param {boolean} resolve - resolving
     * @param {string} id - pair id
     * @returns {void}
     */
    sendResolveOfApplication(resolve, id) {
      this.isLoading = true;

      this.$api.admin.approveOrRejectSneakers(id, resolve)
        .then((res) => {
          this.$renderVue.createAlert('success', res);
        }).catch((e) => {
          this.$renderVue.createAlert('success', e.response.data);
        }).finally(() => {
          this.sendRequestForGetApplication();
        });
    },

    /**
     * Get pairs
     * @returns {void}
     */
    sendRequestForGetApplication() {
      this.$api.admin.getNotApprovedSneakers()
        .then((res) => {
          this.pairs = res;
          this.isLoading = false;
        });
    },
  },
};
</script>
