<template>
    <div class="container">
        <app-header></app-header>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Summary from "./components/Summary.vue";
    import Stocks from "./components/Stocks.vue";
    import Portfolio from "./components/Portfolio.vue";
    import Saves from "./components/Saves.vue";
    import { mapGetters } from 'vuex';
    
    export default {
        components: {
            appHeader: Header,
            appSummary: Summary,
            appStocks: Stocks,
            appPortfolio: Portfolio,
            appSaves: Saves
        }
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all .3s ease-out;
    }

    .slide-fade-enter,
    .slide-fade-leave-active
        {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
