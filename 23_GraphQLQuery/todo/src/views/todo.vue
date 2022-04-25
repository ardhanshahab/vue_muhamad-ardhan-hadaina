<template>
<v-container fluid>
<v-main>
<div>
<v-row>
  <v-col cols="6"><ApolloQuery
    :query="require('../gql/alltodo.gql')"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
         <div v-for="todos in data.todo" :key="todos.id">
          <span> ID : {{todos.id}}</span>
          <span> Todo : {{todos.todo}}</span>
          <span> Complete : {{ todos.complete }}</span>
      </div>
        </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</v-col>
  <v-col cols="6">  <div>
    <h1>My Todo List</h1>
    <div class="todo-form">
      <ApolloMutation
  :mutation="require('../gql/inserttodo.gql')"
  :variables="{
    todo,
    complete
  }"
  :update="updateCache"
>
  <template v-slot="{ mutate, loading, error }">
     <v-form>
     <input type="todo" v-model = "todo" name="todo" placeholder="todo-name"/>
     <input type="complete" v-model = "complete" name="complete" placeholder="false"/>
     <button :disabled="loading" @click="mutate()">Submit</button>
     <p v-if="error">An error occurred: {{ error }}</p>
     </v-form>
  </template>
</ApolloMutation>     
    </div>
  </div>
</v-col>
</v-row>
</div>
</v-main>
</v-container>
</template>


<script>

export default {
    name: 'todoVue',
 data() {
     return{
         todo: "",
         Alltodos: [],
         complete: false
     }
 },


 methods: {
     OnSubmit() {
         this.Alltodos.push(this.newTodo)
         this.newTodo = ""
     },

     completed(index) {
        this.Alltodos.splice(index,1) 
     },

 updateCache (store, { data: { insert_todo_one } }) {
      const query = {
        query: require("../gql/alltodo.gql")}
      // Read the query from cache
      const data = store.readQuery(query)
      console.log(data)
      // Mutate cache result
      data.todo.push(insert_todo_one)
      console.log(insert_todo_one)
      // Write back to the cache
      store.writeQuery({
        ...query,
        data,
      })
    }, 

 },




}
</script>