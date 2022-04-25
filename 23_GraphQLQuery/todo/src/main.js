import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  vuetify,
  render: h => h(App)
}).$mount('#app')
