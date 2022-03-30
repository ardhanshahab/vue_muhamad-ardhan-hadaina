const state = () => ({
    todo: "test",
    list: [ {
        todo: "Belajar FrontEnd"
    }
    ]
});

const mutations = {
    setTodo(state, param){
        state.todo = param;
    },
    setList(state, param) {
        state.list = param;
    }
};
const actions = {
    setList(store, param) {
        const todos = store.state.list;
    
        todos.push({
          todo: param.todo
        });
    
        store.commit("setList", todos);
      }
};

export default {
    state,
    mutations,
    actions
};