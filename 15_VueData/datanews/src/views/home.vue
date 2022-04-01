<template>
  <div class="home">
    <h1>Today News</h1>
    <div v-for="(pokemon, index) in listPokemon" :key="index">
    <img :src="pokemon.urlToImage" width="250"/>
    <br/><br/> 
    <h3 @click="redirect(index)">{{ pokemon.title }}</h3>>
    <h4>{{ pokemon.publishedAt }}</h4>
  <hr/>
    </div>
  </div>
</template>
// saya mengikuti modul pokemon agar tidak bingung alurnya
<script>
export default {
  name: "homeVue",
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
  
    redirect(index) {
        this.$router.push('/detailnews/' + index);
    }
    
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>

<style scoped>
div {
  
}
</style>