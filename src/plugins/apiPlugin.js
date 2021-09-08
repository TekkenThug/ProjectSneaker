import api from '@/services/api';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$api = api;
  },
};
