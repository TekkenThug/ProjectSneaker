import Vue from 'vue';
import App from '@/App.vue';

/** Global styles */
import '@/styles/tailwind.scss';

/** Vue tools */
import router from '@/services/router';
import store from '@/store/store';
import i18n from '@/services/translate/i18n';

/** Plugins */
import apiPlugin from '@/plugins/apiPlugin';
import renderVuePlugin from '@/plugins/renderVuePlugin';

/** Global components */
import Preloader from '@/components/UI/_Preloader/Preloader';

Vue.use(apiPlugin);
Vue.use(renderVuePlugin);

Vue.component('Preloader', Preloader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
