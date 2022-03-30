const state = () => ({
    name: "John",
    email: "john@gmail.com",
    age: 25,
    list: [
      { name: "John", age: 20 },
      { name: "Rebecca", age: 25 }
    ]
  });
  
  const mutations = {
    setName(state, param) {
      state.name = param;
    },
    setEmail(state, param) {
      state.email = param;
    },
    setAge(state, param) {
      state.age = param;
    },
    setList(state, param) {
      state.list = param;
    }
  };
  
  const actions = {
    setProfile(store, param) {
      store.commit("setName", param.name);
      store.commit("setEmail", param.email);
  
      if (param.age > 30) {
        store.commit("setAge", 30);
      } else {
        store.commit("setAge", param.age);
      }
    },
    setList(store, param) {
      const users = store.state.list;
  
      users.push({
        name: param.name,
        age: param.age
      });
  
      store.commit("setList", users);
    }
  };
  
  export default {
    state,
    mutations,
    actions
  };
  