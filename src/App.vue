<template>
  <v-app>
    <v-toolbar 
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light" v-text="mainTitle"></span>
        <span v-text="subTitle"></span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content class="white">
      <router-view/>
    </v-content>

    <v-footer class="pa-3">
      <div>&copy;2019</div>
      <v-spacer></v-spacer>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScRFFp5RZDxxrlorxJ8UXTu0jy3inhrMcurLIPCpb7ZmCMCsQ/viewform?usp=sf_link" target=”_blank”>
        <font size="4">★品質改善アンケートフォームはこちら★</font>
      </a>  
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      mainTitle: "AKABANE NO ",
      subTitle: "IZAKAYA"
    }
  }
}
</script>
