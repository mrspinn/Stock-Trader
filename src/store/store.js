import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from "./modules/portfolio";
import stocks from "./modules/stocks";
import saves from "./modules/saves";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    modules: {
        portfolio,
        stocks,
        saves
    }
});