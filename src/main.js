import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { store } from "./store/store";
import { routes } from "./routes.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-e331c.firebaseio.com/';

Vue.filter('addCommas', function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
