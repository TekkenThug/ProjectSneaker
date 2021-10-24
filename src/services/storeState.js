import store from '@/store/store';

export default {
  getToken: () => store.state.auth.token,
};
