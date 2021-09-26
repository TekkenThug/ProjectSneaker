<template>
  <div class="sign-in">
    <img
      class="sign-in__logo"
      src="/images/logo.png"
      alt="logotype"
    >
    <form
      class="sign-in__form"
      @submit.prevent
    >
      <input-field
        class="sign-in__form-field"
        v-bind="loginField"
        v-model="loginField.value"
      />
      <input-field
        class="sign-in__form-field"
        v-bind="passwordField"
        v-model="passwordField.value"
      />
      <btn
        class="sign-in__form-submit"
        :title="$t('Log in')"
      />
      <a
        href=""
        class="sign-in__form-link"
      >
        {{ $t('For the first time? Register now') }}
      </a>
    </form>
  </div>
</template>

<script>
import InputField from '@/components/UI/Input';
import Btn from '@/components/UI/Button';

export default {
  name: 'SignIn',
  components: { InputField, Btn },
  data() {
    return {
      loginField: {
        value: '',
        placeholder: this.$t('Login'),
        icon: {
          width: 16,
          height: 16,
          name: 'user',
        },
      },
      passwordField: {
        value: '',
        type: 'password',
        placeholder: this.$t('Password'),
        icon: {
          width: 16,
          height: 16,
          name: 'lock',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  &__form {
    margin-top: 40px;
    padding: 20px;
    border: 1px solid $color-3;
    border-radius: 8px;

    &-field {
      &:not(&:last-child) {
        margin-bottom: 15px;
      }
    }

    &-link {
      @include linkStyle;
    }

    &-submit {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
