<template>
  <v-app>
    <v-toolbar 
      app
      color="cyan"
      dark
    >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light" v-text="mainTitle"></span>
        <span v-text="subTitle"></span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      mainTitle: "AKABANE NO ",
      subTitle: "IZAKAYA"
    }
  }
}
</script>
