import Vue from 'vue'
import App from './App.vue'
import router from './router';
//import VueAxios from 'vue-axios';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
//import { ToastPlugin } from 'bootstrap-vue'
import Toast from 'bootstrap-vue';
Vue.use(Toast);
//Vue.use(ToastPlugin)

Vue.use(BootstrapVue);
//Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
