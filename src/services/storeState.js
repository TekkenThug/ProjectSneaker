import store from '@/store/store';

export default {
  getToken: () => store.state.auth.token,
  getRefreshToken: () => store.state.auth.refreshToken,
  updateTokens: () => store.dispatch('auth/refresh'),
};
