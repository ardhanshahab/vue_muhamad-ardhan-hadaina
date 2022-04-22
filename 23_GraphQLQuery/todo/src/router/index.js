import Vue from 'vue'
import VueRouter from 'vue-router'
import homeVue from '../views/Home.vue'
import todoVue from '../views/todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeVue',
    component: homeVue
  },
  {
    path: '/todo',
    name: 'todoVue',
    component: todoVue,
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
