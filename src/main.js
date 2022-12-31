import Vue from 'vue'
import App from "./App.vue";
import router from './router'
import store from './store';
import VCharts from 'v-charts'
// import VueSocketIO from 'vue-socket.io'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VCharts)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(new VueSocketIO({
//   debug: true,
//   // 服务器端地址
//   connection: 'ws://localhost:8000',
//   vuex: {
//   }
// }))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

