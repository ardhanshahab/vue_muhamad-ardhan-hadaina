const state = {
 todos: []
}

const mutations = {
      setTodoList(state, param) {
        state.todos = param;
      }
}

const actions = {
    insertTodo(store, param) {
        const todos = store.state.todos;

        todos.push({
          todos: param.todos
        });


        store.commit("setTodoList", todos);
      }
};

export default {
    state,
    mutations,
    actions
}