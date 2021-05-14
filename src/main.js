import Vue from 'vue'
import vSelect from 'vue-select'
import App from './App.vue'
import router from './router'
import '../plugins/bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('v-select', vSelect)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
