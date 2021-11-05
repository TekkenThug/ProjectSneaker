<template>
  <ul class="navbar__list">
    <navbar-item
      name="Wiki"
      link="/wiki"
    />

    <template v-if="userIsAuth">
      <navbar-item
        name="Requests"
        link="/admin"
      />

      <navbar-item
        name="Logout"
        @click="logoutUser"
      />
    </template>

    <navbar-item
      v-if="!userIsAuth"
      name="Login"
      link="/auth"
    />
  </ul>
</template>

<script>
import NavbarItem from './navbar-item';

export default {
  name: 'NavbarList',

  components: { NavbarItem },

  computed: {
    /**
     * Get user auth state
     * @returns {boolean}
     */
    userIsAuth() {
      return this.$store.state.auth.isAuth;
    },
  },

  methods: {
    /**
     * Logout user, if success - redirect to main page
     * @returns {void}
     */
    logoutUser() {
      this.$store.dispatch('auth/logOut')
        .then(() => {
          this.$router.push({ name: 'MainPage' });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .navbar__list {
    display: flex;
    font-size: 18px;

    .navbar__item {
      @include trans;

      color: $color-0;
      cursor: pointer;

      &:hover {
        color: $color-1;
      }

      &:not(&:first-child) {
        margin-left: 30px;
      }
    }
  }
</style>
