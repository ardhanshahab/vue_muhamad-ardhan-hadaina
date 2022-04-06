<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/newslogo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to NewsApp
        </h1>

        <p class="subheading font-weight-regular">
          Klik tombol dibawah untuk melihat berita terbaru
          <br/>
          <br/>
          <br/>
          
          <v-btn
          color="blue lighten-4"
          href="/news"
          >GO!</v-btn>
        </p>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data() {
      
    },
    methods: {
        redirectnews() {
        this.$router.push('/news');
    }
    }
  }
</script>
