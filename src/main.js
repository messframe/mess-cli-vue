import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MessRouter from 'mess-router'
import MessEventBus from 'mess-eventbus'

Vue.prototype.$singleSpa = {
  router: new MessRouter('hash'),
  eventBus: new MessEventBus()
}
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
