import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

require('../node_modules/izitoast/dist/css/iziToast.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
