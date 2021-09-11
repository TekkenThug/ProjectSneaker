<template>
  <form
    class="add-form"
    @submit.prevent="serialize"
  >
    <h3
      v-show="title"
      class="add-form__title"
    >
      {{ title }}
    </h3>
    <p
      v-show="subtitle"
      class="add-form__subtitle"
    >
      {{ subtitle }}
    </p>
    <div class="add-form__fields">
      <inputField
        class="add-form__field"
        v-for="(field, index) in sneakerDraft"
        :key="index"
        :placeholder="field.name"
        :type="field.type ? field.type : 'text'"
        v-model="field.value"
      />
    </div>
    <submit-btn
      class="add-form__submit"
      title="Отправить"
    />
  </form>
</template>

<script>
import inputField from '@/components/UI/Input';
import SubmitBtn from '@/components/UI/Button';

export default {
  name: 'AddForm',
  components: { inputField, SubmitBtn },
  props: {
    title: {
      type: String,
      default: 'Добавление кроссовок',
    },
    subtitle: {
      type: String,
      default: `
        После отправки, заявка на добавление будет рассмотрена модераторами
      `,
    },
  },
  data() {
    return {
      sneakerDraft: [
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
    };
  },
  methods: {
    serialize() {
      const serializeData = this.sneakerDraft.reduce((obj, { name, value }) => {
        return Object.assign(obj, { [name]: value });
      }, {});

      this.$emit('submit', serializeData);
    },
  },
};
</script>

<style lang="scss" scoped>
  .add-form {
    width: 100%;
    max-width: 480px;
    border-radius: 7px;
    padding: 20px;
    background-color: $color-1;

    &__title {
      font-size: 24px;
      font-weight: 700;
      text-align: left;
      margin-bottom: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid $color-3;
    }

    &__subtitle {
      color: $color-3;
      text-align: left;
      font-size: 14px;
      margin: 5px 0 15px;
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
    }

    &__field {
      flex: 0 0 48%;
      margin-bottom: 10px;

      &:nth-child(2n) {
        margin-left: 10px;
      }
    }

    &__submit {
      margin: 15px auto 0;
    }
  }

  @media (max-width: $mobile) {
    .add-form__field {
      flex: 0 0 100%;

      &:nth-child(2n) {
        margin-left: 0;
      }
    }
  }
</style>
