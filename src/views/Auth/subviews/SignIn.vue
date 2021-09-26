<template>
  <div class="sign-in">
    <form
      class="sign-in__form"
      @submit.prevent
    >
      <input-field
        v-for="(field, index) in fields"
        :key="index"
        class="sign-in__form-field"
        v-bind="field"
        v-model="field.value"
      />
      <btn
        class="sign-in__form-submit"
        :title="$t('Log in')"
      />
      <router-link
        :to="{ name: 'SignUp' }"
        class="sign-in__form-link"
      >
        {{ $t('For the first time? Register now') }}
      </router-link>
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
      fields: {
        loginField: {
          value: '',
          placeholder: this.$t('Email'),
          icon: {
            width: 16,
            height: 16,
            name: 'email',
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  @include authForm;
}
</style>
