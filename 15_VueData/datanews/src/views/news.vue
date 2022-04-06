<template>
<v-container>
  <v-row class="text-center">
  <div class="home">
    <br/>
    <div v-for="(pokemon, index) in listPokemon" :key="index">
    <br/>
    <v-card
  elevation="7"
  shaped
  color="blue lighten-4"
  
>
<br/>
    <img :src="pokemon.urlToImage" width="250"/>
    <br/><br/> 
    <h3 @click="redirect(index)">{{ pokemon.title }}</h3>
    <br/>
    <h4>{{ pokemon.publishedAt }}</h4>
    <br/>
  </v-card>
  <br/>
 
    </div>
  </div>
  </v-row>
  </v-container>

</template>
// saya mengikuti modul pokemon agar tidak bingung alurnya
<script>
export default {
  name: "newsVue",
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