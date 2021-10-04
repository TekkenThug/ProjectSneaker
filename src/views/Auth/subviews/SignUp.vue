<template>
  <div class="sign-up">
    <auth-form
      :sending-fields="fields"
      ref="authForm"
      @checkAuthData="registerUser"
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
        email: {
          value: '',
          placeholder: this.$t('Email'),
          validationRules: ['required', 'email'],
        },
        nickname: {
          value: '',
          placeholder: this.$t('Nickname'),
          validationRules: ['required'],
        },
        password: {
          value: '',
          type: 'password',
          placeholder: this.$t('Password'),
          validationRules: ['required'],
        },
        repeatPassword: {
          value: '',
          type: 'password',
          placeholder: this.$t('Repeat password'),
          validationRules: ['required'],
        },
      },
    };
  },
  methods: {
    registerUser(registerData) {
      this.$api.auth.register(registerData)
        .then(() => {
          this.$router.push({ name: 'SignIn' });
        })
        .catch((e) => {
          this.$renderVue.createAlert('error', this.$t(`errors.${e.response.data}`));
          this.$refs.authForm.changeLoad();
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
