<template>
<v-app>

    <v-app-bar
    app
    color="blue"
    dense
    elevation="4"
        dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="newslogo"
          class="shrink mr-2"
          contain
          src="./assets/newslogo.png"
          transition="scale-transition"
          width="50"
        />
        
        <h3 > NewsID </h3>

        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>
  

    </v-app-bar>



  <!-- Sizes your content based upon application components -->
  <v-main>
<v-row>
  <v-col cols="3">
    <v-card
    height="100%"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent absolute>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            NewsAPP
          </v-list-item-title>
          <v-list-item-subtitle>
            Sumber Berita Anda
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  </v-col>
  <v-col cols="1"></v-col>
  <v-col cols="7"><router-view></router-view></v-col>
  <v-col cols="1"></v-col>
    <!-- Provides the application the proper gutter -->
    <!-- <v-container fluid> -->

      <!-- If using vue-router -->

</v-row>
    <!-- </v-container> -->
  </v-main>

  <v-footer
  color="blue lighten-4"
  >
  
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>

  </v-footer>

</v-app>

</template>

<script>

export default {
  name: 'App',

  data () {
    return{
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,

    }
  }
};
</script>
