<template>
  <div class="sign-in">
    <auth-form
      :sending-fields="fields"
      ref="authForm"
      link-title="For the first time? Register now"
      btn-title="Log in"
      route-to="SignUp"
      @checkAuthData="authorize"
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
        email: {
          value: '',
          placeholder: this.$t('Email'),
          validationRules: ['required', 'email'],
          icon: {
            width: 16,
            height: 16,
            name: 'email',
          },
        },
        password: {
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
  methods: {
    authorize(data) {
      this.$store.dispatch('auth/logIn', data)
        .then(() => {
          this.$router.push({ name: 'Requests' });
        }).catch((e) => {
          this.$renderVue.createAlert('error', this.$t(`errors.${e.response.data}`));
          this.$refs.authForm.changeLoad();
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
