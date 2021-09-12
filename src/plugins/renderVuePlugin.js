import createAlert from '@/components/Alert/constructor';

export default {
  install(Vue) {
    Vue.prototype.$renderVue = {
      createAlert,
    };
  },
};
