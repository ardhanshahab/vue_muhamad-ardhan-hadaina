<template>
  <v-app>
       <v-main>
         <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
