import Vue from 'vue';
import Vuesax from 'vuesax';
import Router from 'vue-router';

import App from './App.vue';
import routes from './routes';

import 'vuesax/dist/vuesax.css';

const router = new Router({mode: 'history', routes});

Vue.use(Router);
Vue.use(Vuesax, {});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
