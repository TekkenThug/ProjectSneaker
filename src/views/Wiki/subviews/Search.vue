<template>
  <div
    class="search"
  >
    <h1 class="search__title">
      {{ $t('Discover the world of sneakers') }}
    </h1>
    <p class="search__subtitle">
      {{ $t('Find the pair you need!') }}
    </p>
    <search-field
      class="search__field"
      :placeholder="$t('What kind of sneakers are you interested in?')"
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
      {{ $t(`Didn't find the right one, although you know that it exists? Add it!`) }}
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
        title: this.$t('Add pair'),
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

    async getSearchingSneakers() {
      if (!this.searchData.loading) {
        this.searchData.loading = true;
        this.searchData.result = null;

        setTimeout(async () => {
          if (this.searchData.value.trim()) {
            this.searchData.result = await this.$api.getSneakers(this.searchData.value);
            this.searchData.loading = false;
          } else {
            this.searchData.loading = false;
          }
        }, 1000);
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
