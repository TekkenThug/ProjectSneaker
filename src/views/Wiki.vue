<template>
  <div class="start">
    <h1 class="start__title">Откройте для себя мир сникеров</h1>
    <p class="start__subtitle">
      Смотрите, создавайте и изучайте историю кроссовок вместе с нами
    </p>
    <search-field
        class="start__search"
        placeholder="Какие кроссовки интересуют?"
        :icon="searchIcon"
        v-model="searchValue"
    />
    <div class="start__results">
      <sneaker-card
          v-for="pair in resultSneaker"
          :key="pair.vendorCode"
          :product-info="pair"
      />
    </div>
  </div>
</template>

<script>
import sneakers from "@/mock/sneakers";

import SearchField from "@/components/UI/Input";
import SneakerCard from "@/components/Card";

export default {
  name: "Wiki",
  components: { SearchField, SneakerCard },

  data() {
    return {
      searchIcon: {
        width: 18,
        height: 18,
        name: 'search'
      },

      searchValue: '',
      resultSneaker: sneakers
    }
  }
}
</script>

<style lang="scss" scoped>
  .start {
    padding: 40px;
    text-align: center;

    &__title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__subtitle {
      color: rgba($gray, .8);
    }

    &__search {
      max-width: 500px;
      margin: 35px auto;

      .svg-icon--search {
        fill: red;
        color: red;
      }
    }

    &__results {
      max-width: 500px;
      margin: 0 auto;
    }
  }
</style>