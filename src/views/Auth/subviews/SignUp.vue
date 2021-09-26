<template>
  <div class="sign-up">
    <auth-form
      :sending-fields="fields"
      link-title="Already Registered? Sign in!"
      btn-title="Sign up"
      route-to="SignIn"
    />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm';

export default {
  name: 'SignUp',
  components: { AuthForm },
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

</style>
