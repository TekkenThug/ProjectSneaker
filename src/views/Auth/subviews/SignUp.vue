<template>
  <div class="sign-up">
    <form
      class="sign-up__form"
      @submit.prevent
    >
      <input-field
        v-for="(field, index) in fields"
        :key="index"
        class="sign-up__form-field"
        v-bind="field"
        v-model="field.value"
      />
      <btn
        class="sign-up__form-submit"
        :title="$t('Sign up')"
      />
      <router-link
        :to="{ name: 'SignIn' }"
        class="sign-up__form-link"
      >
        {{ $t('Already Registered? Sign in!') }}
      </router-link>
    </form>
  </div>
</template>

<script>
import InputField from '@/components/UI/Input';
import Btn from '@/components/UI/Button';

export default {
  name: 'SignUp',
  components: { InputField, Btn },
  data() {
    return {
      fields: {
        emailField: {
          value: '',
          placeholder: this.$t('Email'),
        },
        nickField: {
          value: '',
          placeholder: this.$t('Nickname'),
        },
        passwordField: {
          value: '',
          type: 'password',
          placeholder: this.$t('Password'),
        },
        repeatPasswordField: {
          value: '',
          type: 'password',
          placeholder: this.$t('Repeat password'),
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  @include authForm;
}
</style>
