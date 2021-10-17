<template>
  <div class="requests">
    <template v-if="pairs.length">
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
      pairs: [],
    };
  },
  mounted() {
    this.$api.getSneakers().then((res) => {
      this.pairs = res;
    });
  },
};
</script>

<style lang="scss" scoped>
//.requests {
//  display: flex;
//  justify-content: space-between;
//}
</style>
