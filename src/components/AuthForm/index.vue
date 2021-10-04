<template>
  <validation-observer
    v-slot="{ handleSubmit }"
    ref="authForm"
  >
    <form
      @submit.prevent="handleSubmit(successValidate)"
      class="auth-form"
    >
      <preloader
        class="auth-form__preloader"
        v-if="isLoad"
      />
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
      isLoad: false,
    };
  },
  methods: {
    successValidate() {
      this.isLoad = true;
      this.$emit('checkAuthData', serialize(this.fields));
    },
    changeLoad() {
      this.isLoad = !this.isLoad;
    },
    clearForm() {
      this.changeLoad();

      Object.keys(this.fields).forEach((field) => {
        this.fields[field].value = '';
      });

      this.$nextTick(() => {
        this.$refs.authForm.reset();
      });
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
  position: relative;
  overflow: hidden;

  &__preloader {
    @include preloader--fill;
  }

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
