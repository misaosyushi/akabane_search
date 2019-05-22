import Vue from 'vue';
import Vuex from 'vuex';

import izakaya from '@/store/izakaya.js'

Vue.use(Vuex);

export default new Vuex.Store ({

    modules: {
        izakaya
    }
})