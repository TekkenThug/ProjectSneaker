<template>
  <div class="requests">
    <div v-if="isLoading">
      <preloader />
    </div>
    <div
      v-else-if="pairs.length"
      class="requests__items"
    >
      <request-item
        v-for="pair in pairs"
        @resolving="sendResolveOfApplication($event, pair.id)"
        class="requests__item"
        :key="pair.id"
        :sneaker-data="pair"
      />
    </div>
    <div v-else>
      {{ $t('Sneakers not found') }}
    </div>
  </div>
</template>

<script>
import RequestItem from '@/components/RequestItem';

export default {
  name: 'Requests',
  components: { RequestItem },
  data() {
    return {
      isLoading: true,
      pairs: [],
    };
  },
  mounted() {
    this.sendRequestForGetApplication();
  },
  methods: {
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

<style lang="scss" scoped>
  .requests {
    &__items {
      display: flex;
      overflow-x: scroll;
    }

    &__item {
      flex: 0 0 500px;
    }
  }
</style>
