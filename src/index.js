// import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

let el = document.getElementById('app_mess_vue')
if(!el) {
  el = document.createElement('div');
  el.id = 'app_mess_vue';
  document.body.appendChild(el);
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render: (h) => h(App),
    el: '#app_mess_vue',
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = (props) => {
  Vue.prototype.$singleSpa = props
  return vueLifecycles.mount(props)
};
export const unmount = vueLifecycles.unmount;
