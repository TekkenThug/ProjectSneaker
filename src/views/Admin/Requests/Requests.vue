<template>
  <div class="requests">
    <request-item
      v-for="(pair, key) in pairs"
      :key="key"
      :sneaker-data="pair"
    />
  </div>
</template>

<script>
import RequestItem from '@/components/RequestItem';

export default {
  name: 'Requests',
  components: { RequestItem },
  data() {
    return {
      pairs: null,
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
