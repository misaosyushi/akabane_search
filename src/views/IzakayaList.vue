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
              :href="item.url"
              avatar
              @click="test"
            >
              <v-list-tile-avatar size="50">
                <img :src="item.image">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.mobileAccess"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.catch"></v-list-tile-sub-title>
                
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

        </v-card>

        <div class="text-xs-center pt-2">
            <v-pagination
                color="primary"
                :value="currentPage"
                :length="totalPage"
                @input="pageTransition"
            />
        </div>

        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)

  export default {
    name: "IzakayaList",
    data () {
        return{
            jsonData: Array,
            hoge: ""
        }
    },
    mounted: function() {
        this.getData();
        console.log("result -> " + this.jsonData);
        this.test();
        console.log("hoge "+this.hoge);
    },
    computed: {
        ...mapGetters('izakaya',{
        errorMessage: 'errorMessage',
        currentPage: 'currentPage',
        totalPage: 'totalPage',
        izakayaList: 'izakayaList'
    })
    },
    methods: {
        ...mapActions('izakaya',{
            getIzakayaList: 'getIzakayaList'
        }),
        getData () {
            console.log("start");
            const url = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9288e7183fb5234b&small_area=X141&genre=G001&format=jsonp";
            this.$jsonp(url).then(json => {
              console.log(json);
              // Success.
              this.jsonData = json;
            }).catch(err => {
                // Failed.
                console.log("failed -> " + err)
            })
        },
        test() {
          this.hoge = "hoge";
        },
        pageTransition() {
        }
    }
  }
</script>

<style>

</style>
