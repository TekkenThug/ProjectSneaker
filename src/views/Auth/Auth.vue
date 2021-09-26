<template>
  <div class="auth">
    <div
      class="auth__bg"
      style="background-image: url('/images/auth-bg.png')"
    />
    <div class="auth__content">
      <div class="auth__content-inner">
        <img
          class="auth__logo"
          src="/images/logo.png"
          alt="logotype"
        >
        <form
          class="auth__form"
          @submit.prevent
        >
          <input-field
            class="auth__form-field"
            v-bind="loginField"
            v-model="loginField.value"
          />
          <input-field
            class="auth__form-field"
            v-bind="passwordField"
            v-model="passwordField.value"
          />
          <btn
            class="auth__form-submit"
            :title="$t('Log in')"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import InputField from '@/components/UI/Input';
import Btn from '@/components/UI/Button';

export default {
  name: 'Auth',
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
  .auth {
    width: 100%;
    display: flex;

    &__bg {
      flex: 0 1 70%;
      display: flex;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      &::before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba($color-0, .3);
      }
    }

    &__content {
      flex: 1 1 50%;
      padding: 60px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: $mobileXS) {
        padding: 60px 20px;
      }

      &-inner {
        max-width: 300px;
      }
    }

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

      &-submit {
        width: 100%;
      }
    }
  }
</style>
