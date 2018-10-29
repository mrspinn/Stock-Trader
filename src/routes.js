import Portfolio from "./components/Portfolio.vue";
import Summary from "./components/Summary.vue";
import Stocks from "./components/Stocks.vue";
import Saves from "./components/Saves.vue";

export const routes = [
    { path: '/', component: Summary },
    { path: '/portfolio', component: Portfolio},
    { path: '/stocks', component: Stocks},
    { path: '/load', component: Saves}
]