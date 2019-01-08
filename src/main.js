import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';

Vue.config.productionTip = false
 
// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
