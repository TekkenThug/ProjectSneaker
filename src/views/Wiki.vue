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
        v-model="results"
    />
    {{ results }}
  </div>
</template>

<script>
import SearchField from "@/components/UI/Input";

export default {
  name: "Wiki",
  components: { SearchField },

  data() {
    return {
      searchIcon: {
        width: 18,
        height: 18,
        name: 'search'
      },

      results: '',
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
  }
</style>