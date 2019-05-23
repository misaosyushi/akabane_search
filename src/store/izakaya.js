// import axios from '@/api/axios';

export default {
    namespaced: true,
    state:{
      errorMessage: "error!",
      currentPage: 1,
      totalPage: 6,
      izakayaList: [
        {
          id: 1
          , name:"居酒屋ほげ"
          , mobileAccess: "赤羽徒歩1分"
          , image: "https://imgfp.hotp.jp/IMGH/24/91/P031912491/P031912491_100.jpg"
          , url: "https://www.hotpepper.jp/strJ001118777/?vos=nhppalsa000016"
          , catch: "おいしいよ！"
        },
        {
          id: 2
          , name:"居酒屋ふが"
          , mobileAccess: "赤羽徒歩5分"
          , image: "https://imgfp.hotp.jp/IMGH/35/72/P032723572/P032723572_100.jpg"
          , url: "https://www.hotpepper.jp/strJ001118777/?vos=nhppalsa000016"
          , catch: "コスパ最強！"
        },
        {
          id: 3
          , name:"居酒屋ぴよ"
          , mobileAccess: "赤羽徒歩10分"
          , image: "https://imgfp.hotp.jp/IMGH/12/88/P032551288/P032551288_69.jpg"
          , url: "https://www.hotpepper.jp/strJ001118777/?vos=nhppalsa000016"
          , catch: "穴場だよ！"
        },
      ],
    },
    getters:{
      errorMessage: state => {
        return state.errorMessage;
      },
      currentPage: state => {
        return state.currentPage;
      },
      totalPage: state => {
        return state.totalPage;
      },
      izakayaList: state => {
        return state.izakayaList;
      },
    },
    actions:{
    },
    mutations:{
    }
  };
  