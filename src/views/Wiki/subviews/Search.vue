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
      @input="getSearchingSneakers"
    />
    <preloader
      v-if="searchData.loading"
    />
    <div
      v-else
      class="search__results"
    >
      <sneaker-card
        v-for="(pair, index) in searchData.result"
        class="search__result-row"
        :key="index"
        :product-info="pair"
      />
    </div>
    <p class="search__subtitle">
      Не нашли нужную, хотя знаете, что она существует? Добавьте её!
    </p>
    <btn
      @click="goToCreatePage"
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
        value: '',
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

  methods: {
    goToCreatePage() {
      this.$router.push({ name: 'wikiCreate' });
    },

    getSearchingSneakers() {
      if (!this.searchData.loading) {
        this.searchData.loading = true;
        this.searchData.result = null;

        if (this.searchData.value.trim()) {
          setTimeout(async () => {
            this.searchData.result = await this.$api.getSneakers();
            this.searchData.loading = false;
          }, 800);
        } else {
          this.searchData.loading = false;
        }
      }
    },
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
      margin: 35px auto 0;
    }

    &__results {
      width: 100%;
      margin: 20px 0;

      &:empty {
        margin: 10px 0;
      }
    }

    &__result-row {
      margin-bottom: 20px;
    }

    &__add-btn {
      margin-top: 20px;
    }
  }
</style>
