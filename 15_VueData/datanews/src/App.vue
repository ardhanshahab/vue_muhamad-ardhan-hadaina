<template>
<v-app>

    <v-app-bar 
    app 
    color="blue" 
    dark 
    dense
    elevation="4"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-img 
          alt="newslogo"
          class="shrink mr-2"
          contain
          src="./assets/newslogo.png"
          transition="scale-transition"
          width="50"
      ></v-img>

      <v-toolbar-title>News ID</v-toolbar-title>

      <v-spacer></v-spacer>
<v-btn text href="/">
Home
</v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="white">
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

      <v-list dense>
        <v-list-item v-for="(item, id) in items" :key="id" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  <!-- Sizes your content based upon application components -->
  <v-main>
<v-row>
 
    <!-- Provides the application the proper gutter -->
    <!-- <v-container fluid> -->
<v-container>
      <!-- If using vue-router -->
<router-view></router-view>
</v-container>
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
      drawer:true,
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
