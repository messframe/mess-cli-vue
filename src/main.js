import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MessRouter from 'mess-router'

Vue.prototype.$singleSpa = {
  router: new MessRouter('hash')
}
Vue.prototype.$singleSpa = {}
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
