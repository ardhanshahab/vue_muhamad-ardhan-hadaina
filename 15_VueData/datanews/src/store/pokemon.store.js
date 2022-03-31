import axios from "axios";

const state = () => ({
  list: [],
  info: "",
});

const mutations = {
  setList(state, param) {
    state.list = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  fetchList(store) {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=62a1d2d337ab4769a04e04a0990b93ee`)
      .then((response) => {
        store.commit("setList", response.data.results);
        store.commit("setInfo", "");
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },

};

export default {
  state,
  mutations,
  actions,
}