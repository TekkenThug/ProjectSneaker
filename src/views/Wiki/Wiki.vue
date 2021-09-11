<template>
  <div class="start">
    <div
      v-show="!showAddScreen"
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
      />
      <!--    <div class="start__results">-->
      <!--      <preloader v-if="searchData.loading" />-->
      <!--    </div>-->
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

    <div
      v-show="showAddScreen"
      class="start__screen"
    >
      <add-form
        @submit="postSneakers"
        class="start__add-form"
        title="Опишите пару"
        :sneaker-initial-fields="sneakerAddFields"
      />
    </div>
  </div>
</template>

<script>
import sneakers from '@/mock/sneakers';

import SearchField from '@/components/UI/Input';
import Btn from '@/components/UI/Button';
import AddForm from './addForm';

export default {
  name: 'Wiki',
  components: {
    SearchField,
    Btn,
    AddForm,
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
        result: sneakers,
      },

      sneakerAddFields: [
        {
          name: 'Название',
          value: '',
        },
        {
          name: 'Расцветка',
          value: '',
        },
        {
          name: 'Артикул',
          value: '',
        },
        {
          name: 'Дата релиза',
          value: '',
          type: 'date',
        },
      ],

      addBtn: {
        title: 'Добавить пару',
        icon: {
          name: 'plus',
          width: 18,
          height: 18,
        },
      },

      showAddScreen: false,
    };
  },

  created() {
    this.$api.getSneakers();
  },

  methods: {
    postSneakers(data) {
      this.$api.postSneakers(data);
    },
  },
};
</script>

<style lang="scss" scoped>
  .start {
    text-align: center;
    max-width: 960px;
    width: 100%;

    &__screen {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

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
    }

    &__results {
      max-width: 500px;
      margin: 0 auto;
    }

    &__add-btn {
      margin-top: 20px;
    }

    &__add-form {
      max-width: 480px;

      &::v-deep .add-form__field {
        flex: 0 0 48%;
        margin-bottom: 10px;

        &:nth-child(2n) {
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: $mobile) {
    .start {
      &__add-form {
        &::v-deep .add-form__field {
          flex: 0 0 100%;

          &:nth-child(2n) {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
