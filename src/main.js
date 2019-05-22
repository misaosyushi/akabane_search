import Vue from 'vue'
import Vuex from "vuex";
import '@/plugins/vuetify'
import '@/assets/main.css'
import App from './App.vue'
import '@babel/polyfill';
import store from '@/store/index';
import router from '@/router';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false;
Vue.use(Vuex);

sync(store, router);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
