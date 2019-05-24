<template>
  <v-container>
    <v-layout row>
        <v-flex>
        <v-card 
            class="no-box-shadow"
            color="background"
        >
    
        <v-list three-line>
          <template v-for="(item, index) in izakayaList">

            <v-divider
              :key="index"
              :inset="true"
            ></v-divider>

            <v-list-tile
              :key="item.name"
              :href="item.urls.pc"
              avatar
            >
              <v-list-tile-avatar size="50">
                <img :src="item.photo.mobile.s">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.mobile_access"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.catch"></v-list-tile-sub-title>
                
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

        </v-card>

        <div class="text-xs-center pt-2">
            <v-pagination
                color="primary"
                :total-visible="maxVisibleLength"
                :length="totalPage"
                :value="currentPage"
                @input="pageTransition"
                
            />
        </div>

        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)

  export default {
    name: "IzakayaList",
    data () {
        return{
            izakayaList: "",
            errorMessage: "",
            totalPage: 10,
            maxVisibleLength: 6,
            currentPage: 1
        }
    },
    mounted: function() {
        this.fetchData();
    },
    computed: {
    },
    methods: {
        fetchData () {
            const url = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9288e7183fb5234b&small_area=X141&genre=G001&order=3&count=6&format=jsonp";
            this.$jsonp(url, { start: this.currentPage }).then(json => {
              // Success.
              this.izakayaList = json.results.shop;
              console.log(json.results.shop);
              console.log(json.results.shop.length);
            }).catch(err => {
              // Failed.
              console.log("failed -> " + err)
            })
        },
        pageTransition(clickPage) {
          console.log("clickPage:" + clickPage + ", currnt page:" + this.currentPage);
          this.currentPage = clickPage;
          this.fetchData();
        }
    }
  }
</script>

<style>

</style>
