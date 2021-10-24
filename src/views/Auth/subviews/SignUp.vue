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
          name: 'confirm',
          placeholder: this.$t('Password'),
          validationRules: ['required', 'password'],
        },
        repeatPassword: {
          value: '',
          type: 'password',
          placeholder: this.$t('Repeat password'),
          validationRules: ['required', 'password-confirm:@confirm'],
        },
      },
    };
  },
  methods: {
    registerUser(registerData) {
      this.$api.registerUser(registerData)
        .then((msg) => {
          this.$renderVue.createAlert('success', this.$t(msg.toString()));
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
