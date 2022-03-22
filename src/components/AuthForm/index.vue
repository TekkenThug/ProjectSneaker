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
    /**
     * Link title for change sign in/sign up view
     */
    linkTitle: {
      type: String,
      default: '',
    },

    /**
     * Button title for sign in/sign up
     */
    btnTitle: {
      type: String,
      default: '',
    },

    /**
     * Fields for sending to server
     */
    sendingFields: {
      type: Object,
      default: () => {},
    },

    /**
     * Route to link
     */
    routeTo: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      /**
       * Available fields
       * @type {object}
       */
      fields: this.sendingFields,

      /**
       * Loading state
       * @type {boolean}
       */
      isLoad: false,
    };
  },

  methods: {
    /**
     * Success validate handler
     * @returns {void}
     */
    successValidate() {
      this.isLoad = true;
      this.$emit('checkAuthData', serialize(this.fields));
    },

    /**
     * Change load field state
     * @returns {void}
     */
    changeLoad() {
      this.isLoad = !this.isLoad;
    },

    /**
     * Clear form
     * @returns {void}
     */
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
@import "~@/styles/variables";
@import "~@/styles/mixins";

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
