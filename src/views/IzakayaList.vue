<template>
  <v-container>
    <v-layout row>
        <v-flex>
        <v-card
            class="no-box-shadow"
        >

        <v-layout
          row
          wrap
          justify-center>
          <v-flex xs6>
            <v-select
              v-model="selectedGenreCode"
              :items="genreList"
              item-text="name"
              item-value="code"
              label="ジャンルを選択"
              @change="searchByGenre"
            >
            </v-select>
          </v-flex>
        </v-layout>
        <Message 
          :error-message="errorMessage"
        />
    
        <v-list three-line>
          <template v-for="(item, index) in izakayaList">

            <v-divider
              :key="index"
              :inset="true"
            ></v-divider>

            <v-list-tile
              :key="item.name"
              avatar
              @click="showDetail(item.urls.pc)"
            >           
              <v-list-tile-avatar size="50">
                <img :src="item.photo.mobile.s">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.mobile_access" class="caption"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.catch" class="caption"></v-list-tile-sub-title>  
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
import { mapGetters } from 'vuex';
import Message from '@/components/Message.vue';

const PER_PAGE = 6;

Vue.use(VueJsonp)

  export default {
    name: "IzakayaList",
    components: {
      Message
    },
    data () {
        return{
            selectedGenreCode: {},
            resuls: "",
            izakayaList: "",
            totalPage: 1,
            maxVisibleLength: 7,
            currentPage: 1,
            errorMessage: "",
        }
    },
    mounted: function() {
        this.fetchData(this.currentPage, this.selectedGenreCode);
    },
    computed: {
      ...mapGetters('izakaya', {
        // TODO: ジャンルマスターをAPIでとってくること
        genreList: "genreList"
      })
    },
    methods: {
        fetchData (startNum, genreCode) {
            const url = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9288e7183fb5234b&small_area=X141&order=3&count=50&format=jsonp";
            this.$jsonp(url, { genre: genreCode }).then(json => {
              if(json === undefined || json.results.shop.length === 0) {
                this.errorMessage = "検索結果が見つかりませんでした。";
              }
              const totalCount = json.results.shop.length;
              console.log(json.results);
              if (totalCount % PER_PAGE === 1) {
                this.totalPage = Math.floor(totalCount / PER_PAGE);
              } else {
                this.totalPage = Math.ceil(totalCount/ PER_PAGE);
              }
              this.resuls = json.results.shop;
              this.izakayaList = json.results.shop.slice(startNum, startNum + PER_PAGE);
              window.scrollTo(0,0);
            }).catch(err => {
              console.log(err);
              this.errorMessage = "データの取得に失敗しました。";
            })
        },
        pageTransition(clickPage) {
          this.currentPage = clickPage;
          // TODO: いちいちAPI呼びたくない
          this.fetchData((this.currentPage -1) * PER_PAGE + 1, this.selectedGenreCode);
        },
        showDetail(url) {
          window.open(url, '_blank');
        },
        searchByGenre(genreCode) {
          this.selectedGenreCode = genreCode;
          this.currentPage = 1;
          this.fetchData(this.currentPage, this.selectedGenreCode);
        }
    }
  }
</script>

<style>

</style>
