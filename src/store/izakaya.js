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
          , address:"北区赤羽1-1-1"
          , phone:"090-0000-0000"
          , nonSmoking:"全席喫煙"
        },
        {
          id: 2
          , name:"居酒屋ほげ"
          , mobileAccess: "赤羽徒歩1分"
          , address:"北区赤羽1-1-1"
          , phone:"090-0000-0000"
          , nonSmoking:"全席喫煙"
        },
        {
          id: 3
          , name:"居酒屋ほげ"
          , mobileAccess: "赤羽徒歩1分"
          , address:"北区赤羽1-1-1"
          , phone:"090-0000-0000"
          , nonSmoking:"全席喫煙"
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
  