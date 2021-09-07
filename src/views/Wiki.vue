<template>
  <div class="start">
    <h1 class="start__title">Откройте для себя мир сникеров</h1>
    <p class="start__subtitle">
      Найдите ту пару, которая вам нужна!
    </p>
    <search-field
        class="start__search"
        placeholder="Какие кроссовки интересуют?"
        :icon="searchIcon"
        v-model="searchData.value"
    />
    <!--    <div class="start__results">-->
    <!--      <preloader v-if="searchData.loading" />-->
    <!--    </div>-->
    <p class="start__subtitle">
      Не нашли нужную, хотя знаете, что она существует? Добавьте её!
    </p>
    <btn
        class="start__add-btn"
        :title="addBtn.title"
        :icon="addBtn.icon"
    />
  </div>
</template>

<script>
import sneakers from "@/mock/sneakers";

import SearchField from "@/components/UI/Input";
import Btn from "@/components/UI/Button";

export default {
  name: "Wiki",
  components: { SearchField, Btn },

  data() {
    return {
      searchIcon: {
        width: 18,
        height: 18,
        name: 'search'
      },

      searchData: {
        searchValue: '',
        loading: false,
        result: sneakers
      },

      addBtn: {
        title: 'Добавить пару',
        icon: {
          name: 'plus',
          width: 18,
          height: 18,
        }
      }
    }
  },

  created() {
    this.$api.getSneakers();
  }
}
</script>

<style lang="scss" scoped>
  .start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__subtitle {
      color: rgba($color-3, .8);
      max-width: 300px;
    }

    &__search {
      max-width: 320px;
      width: 100%;
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

    &__add-btn {
      margin-top: 20px;
    }
  }
</style>