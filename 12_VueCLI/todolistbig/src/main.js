import Vue from 'vue'
import App from './App.vue'
import Store from './store'
import router from './router'
Vue.config.productionTip = false

new Vue({
 Store,

 router,
 render: h => h(App)
}).$mount('#app')
