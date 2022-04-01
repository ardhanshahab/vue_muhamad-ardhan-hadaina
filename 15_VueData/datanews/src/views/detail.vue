<template>
  <div class="home">
    <h1>Today News</h1>
 <div>
    <img :src="newsData.urlToImage" width="250"/>
    <br/><br/> 
    <h3>{{ newsData.title }}</h3>
    <h4>{{ newsData.publishedAt }}</h4>
    <h4>By : {{ newsData.author }}</h4>
    <h5>{{ newsData.content }}</h5> 
    <h4>{{ newsData.source ["name"] }}</h4> 
  </div>
  <hr/>
  </div>
    
</template>
// saya mengikuti modul pokemon agar tidak bingung alurnya
<script>
export default {
  name: "detailVue",
  computed: {
   index () { 
       return this.$route.params.index;
   },
   newsData() {
        return this.$store.state.pokemon.list[this.index];
    },
  },
  mounted() {
      console.log(this.newsData)
      console.log(this.index)
    
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>