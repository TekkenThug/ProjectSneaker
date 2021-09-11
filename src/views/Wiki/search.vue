<template>
  <div
    class="search"
  >
    <h1 class="search__title">
      Откройте для себя мир сникеров
    </h1>
    <p class="search__subtitle">
      Найдите ту пару, которая вам нужна!
    </p>
    <search-field
      class="search__field"
      placeholder="Какие кроссовки интересуют?"
      :icon="searchIcon"
      v-model="searchData.value"
    />
    <preloader v-if="searchData.loading" />
    <div
      class="search__result"
      v-if="!searchData.loading"
    >
      <sneaker-card
        v-for="(pair, index) in searchData.result"
        :key="index"
        :product-info="pair"
      />
    </div>
    <p class="search__subtitle">
      Не нашли нужную, хотя знаете, что она существует? Добавьте её!
    </p>
    <btn
      @click="showAddScreen = true"
      class="search__add-btn"
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

<style lang="scss" scoped>
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__subtitle {
      color: rgba($color-3, .8);
      max-width: 300px;
    }

    &__field {
      max-width: 320px;
      width: 100%;
      margin: 35px auto;
    }

    &__results {
      max-width: 500px;
      margin: 0 auto;
    }

    &__add-btn {
      margin-top: 20px;
    }
  }
</style>
