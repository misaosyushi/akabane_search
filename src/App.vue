<template>
  <v-app>
    <v-toolbar app>
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
// import IzakayaList from '@/views/IzakayaList.vue'

export default {
  name: 'App',
  components: {
    // IzakayaList
  },
  data () {
    return {
      mainTitle: "AKABANE NO ",
      subTitle: "IZAKAYA"
    }
  }
}
</script>
