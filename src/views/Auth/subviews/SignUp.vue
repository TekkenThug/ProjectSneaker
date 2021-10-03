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
          validationRules: ['required', 'email'],
        },
        nickField: {
          value: '',
          placeholder: this.$t('Nickname'),
          validationRules: ['required'],
        },
        passwordField: {
          value: '',
          type: 'password',
          placeholder: this.$t('Password'),
          validationRules: ['required'],
        },
        repeatPasswordField: {
          value: '',
          type: 'password',
          placeholder: this.$t('Repeat password'),
          validationRules: ['required'],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
