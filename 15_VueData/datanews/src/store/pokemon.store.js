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
    axios.get('https://newsapi.org/v2/top-headlines', {
        params:{
            apiKey: "62a1d2d337ab4769a04e04a0990b93ee",
            country: "id",
        }
    })
      
      .then((response) => {
        store.commit("setList", response.data.articles);
        store.commit("setInfo", "");
        console.log("reponse", response)
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