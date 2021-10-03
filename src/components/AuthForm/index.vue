<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form
      @submit.prevent="handleSubmit(successValidate)"
      class="auth-form"
    >
      <input-field
        v-for="(field, index) in fields"
        :key="index"
        class="auth-form__field"
        v-bind="field"
        v-model="field.value"
      />
      <btn
        class="auth-form__submit"
        :title="$t(btnTitle)"
      />
      <router-link
        :to="{ name: routeTo }"
        class="auth-form__link"
      >
        {{ $t(linkTitle) }}
      </router-link>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import serialize from '@/services/serialize';
import InputField from '@/components/UI/Input';
import Btn from '@/components/UI/Button';

export default {
  name: 'AuthForm',
  components: {
    InputField,
    Btn,
    ValidationObserver,
  },
  props: {
    linkTitle: {
      type: String,
      default: '',
    },
    btnTitle: {
      type: String,
      default: '',
    },
    sendingFields: {
      type: Object,
      default: () => {},
    },
    routeTo: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fields: this.sendingFields,
    };
  },
  methods: {
    successValidate() {
      this.$emit('checkAuthData', serialize(this.fields));
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-form {
  margin-top: 40px;
  padding: 20px;
  border: 1px solid $color-3;
  border-radius: 8px;

  &__field {
    &:not(&:last-child) {
      margin-bottom: 15px;
    }
  }

  &__link {
    @include linkStyle;
  }

  &__submit {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
