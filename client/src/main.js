import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  router: VueRouter,
  render: h => h(App),
}).$mount('#app')
