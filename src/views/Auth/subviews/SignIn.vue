<template>
  <div class="sign-in">
    <auth-form
      :sending-fields="fields"
      link-title="For the first time? Register now"
      btn-title="Log in"
      route-to="SignUp"
    />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm';

export default {
  name: 'SignIn',
  components: { AuthForm },
  data() {
    return {
      fields: {
        emailField: {
          value: '',
          placeholder: this.$t('Email'),
          validationRules: ['required', 'email'],
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
          validationRules: ['required'],
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

</style>
