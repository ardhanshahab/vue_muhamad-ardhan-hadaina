<template>
  <div class="home">
    <h1>Data News:</h1>
    <ul id="example-1">
      <li v-for="pokemon, index in listPokemon" :key="index">
        {{ pokemon }}
      </li>
    </ul>
    <p>{{ infoPokemon }}</p>
  </div>
</template>
// sayan mengikuti modul pokemon agari tidak bingung alurnya
<script>
export default {
  name: "app",
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
    infoPokemon() {
      return this.$store.state.pokemon.info;
    },
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    },
    
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>