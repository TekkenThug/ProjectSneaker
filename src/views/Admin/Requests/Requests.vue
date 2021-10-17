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
        v-for="(pair, key) in pairs"
        class="requests__item"
        :key="key"
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
    this.$api.admin.getNotApprovedSneakers()
      .then((res) => {
        this.pairs = res;
        this.isLoading = false;
      });
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
