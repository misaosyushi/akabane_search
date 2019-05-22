import Vue from "vue";
import VueRouter from "vue-router";

import IzakayaList from "@/views/IzakayaList.vue";

Vue.use(VueRouter);

export const routes = [
    { 
        path: "/",
        component: IzakayaList
    }
];

export default new VueRouter({
    routes
});
