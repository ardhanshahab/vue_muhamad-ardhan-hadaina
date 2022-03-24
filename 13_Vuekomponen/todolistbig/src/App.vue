<template>

  <div id="app">
<h1>TODOLIST</h1>

<the-hasil-vue v-bind="todo"/>        
        </div>

</template>

<script>
import theHasilVue from "./components/theHasil.vue"
export default {
  name: 'App',
  components: {
    theHasilVue,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
