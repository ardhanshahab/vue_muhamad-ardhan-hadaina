import Vue from 'vue'
import App from './App.vue'

//import router from "./router"
import Store from './store'

import router from './router'
Vue.config.productionTip = false

new Vue({
 // router,
 Store,

 router,
 render: h => h(App)
}).$mount('#app')
