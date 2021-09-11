<template>
  <div
    class="start__screen"
  >
    <h1 class="start__title">
      Откройте для себя мир сникеров
    </h1>
    <p class="start__subtitle">
      Найдите ту пару, которая вам нужна!
    </p>
    <search-field
      class="start__search"
      placeholder="Какие кроссовки интересуют?"
      :icon="searchIcon"
      v-model="searchData.value"
      @input="searchSneakers"
    />
    <preloader v-if="searchData.loading" />
    <div
      class="start__result"
      v-if="!searchData.loading"
    >
      <sneaker-card
        v-for="(pair, index) in searchData.result"
        :key="index"
        :product-info="pair"
      />
    </div>
    <p class="start__subtitle">
      Не нашли нужную, хотя знаете, что она существует? Добавьте её!
    </p>
    <btn
      @click="showAddScreen = true"
      class="start__add-btn"
      :title="addBtn.title"
      :icon="addBtn.icon"
    />
  </div>
</template>

<script>
import SearchField from '@/components/UI/Input';
import Btn from '@/components/UI/Button';
import SneakerCard from '@/components/Card';

export default {
  name: 'Search',
  components: {
    SearchField,
    Btn,
    SneakerCard,
  },
  data() {
    return {
      searchIcon: {
        width: 18,
        height: 18,
        name: 'search',
      },

      searchData: {
        searchValue: '',
        loading: false,
        result: null,
      },

      addBtn: {
        title: 'Добавить пару',
        icon: {
          name: 'plus',
          width: 18,
          height: 18,
        },
      },
    };
  },
};
</script>

<style scoped>

</style>
