import Vue from 'vue'
import App from './App.vue'
import './styles/tailwind.scss'
import router from './router'

import Preloader from "@/components/UI/_Preloader/Preloader";

Vue.component('Preloader', Preloader)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
