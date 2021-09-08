import Vue from 'vue';
import App from './App.vue';
import './styles/tailwind.scss';

/** Vue tools */
import router from './router';

/** Plugins */
import apiPlugin from '@/plugins/apiPlugin';

/** Global components */
import Preloader from '@/components/UI/_Preloader/Preloader';

Vue.use(apiPlugin);

Vue.component('Preloader', Preloader);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
