<template>
  <div class="requests">
    <div v-if="isLoading">
      <preloader />
    </div>
    <template v-else-if="pairs.length">
      <request-item
        v-for="(pair, key) in pairs"
        :key="key"
        :sneaker-data="pair"
      />
    </template>
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
    this.$api.getSneakers()
      .then((res) => {
        this.pairs = res;
        this.isLoading = false;
      });
  },
};
</script>

<style lang="scss" scoped>

</style>
