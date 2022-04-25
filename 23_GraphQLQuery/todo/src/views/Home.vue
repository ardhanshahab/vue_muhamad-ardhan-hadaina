<template>
<v-main>
  <div id="app">
      
      <h1>Halaman Home</h1>
      <ApolloQuery
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

  </div>
  </v-main>
</template>
<script>


export default {
  name: 'homeVue',
  data() {
      return{
        
      }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
