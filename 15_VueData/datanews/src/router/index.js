import Vue from 'vue'
import VueRouter from 'vue-router'
import homeVue from '../views/home.vue'
import detailVue from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeVue',
    component: homeVue
  },
  {
    path: '/detailnews/:index',
    name: 'detailVue',
    component: detailVue,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
