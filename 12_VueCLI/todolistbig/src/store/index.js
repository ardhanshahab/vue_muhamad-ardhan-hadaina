import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import todolistStore from "./todolist.store";
import userStore from "./user.store";
import productStore from "./product.store";

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ["user", "product"]
});

const store = new Vuex.Store({
  strict: true,
  plugins: [persistedstate],
  modules: {
    user: {
      namespaced: true,
      ...userStore
    },
    product: {
      namespaced: true,
      ...productStore
    },
    todolist: {
        namespaced: true,
        ...todolistStore
  
  }
}
});

export default store;
