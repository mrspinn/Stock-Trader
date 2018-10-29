<template>
    <div class="row justify-content-center">
        <div class="card col-5 px-0" v-if="portfolioLength == 0">
            <div class="card-header bg-warning">
                Empty Portfolio
            </div>
            <div class="card-body">
                <div class="card-title">You have nothing in your portfolio!</div>
                <div class="card-text">Click the button to start buying stocks!</div>
                <router-link class="btn btn-primary float-right" to="/stocks">Stocks</router-link>
            </div>
            
        </div>
        <div class="card col-5 m-4 px-0 border-secondary" v-for="stock in getPortfolio" :key="stock.id">
            <div class="card-header bg-info">
                <p class="d-inline">{{ stock.name }} </p>
                <p class="font-weight-light d-inline">Price: {{getStockPrice(stock.name)}}  ({{getStockChange(stock.name)}})</p>
                
            </div>
            <div class="card-body bg-white">
                <div class="card-text">Quantity: {{ stock.quantity }} </div>
                <div class="card-text">Total Value: ${{stock.quantity * getStockPrice(stock.name) | addCommas }}</div>
                <br>
                <input type="text" 
                    class="form-control d-inline" 
                    placeholder="Quantity" 
                    style="width: 50%;" 
                    v-model=entered[stock.name]
                    @keyup.enter="sellStocks({name: stock.name, quantity: -entered[stock.name], price: getStockPrice(stock.name)})"
                    @input="enable(stock.name)">
                <button 
                    class="btn btn-info float-right" 
                    :disabled="disabled[stock.name]"
                    @click="sellStocks({name: stock.name, quantity: -entered[stock.name], price: getStockPrice(stock.name)})"
                    >Sell</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                entered: {},
                disabled: {
                    Google: true,
                    BMW: true,
                    Twitter: true,
                    Apple: true,
                }
            }
        },
        computed: {
            ...mapGetters([
                'getStockPrice',
                'getStockChange',
                'getPortfolio',
            ]),
            portfolioLength(){
                return this.getPortfolio.length;
            }
        },
        methods: {
            ...mapMutations([
                'updateStocks',
                'changeView'
            ]),
            sellStocks(stock){
                if (this.entered[stock.name] <= this.getPortfolio.find(obj => obj.name === stock.name).quantity) {                    
                    this.entered[stock.name] = '';
                    this.disabled[stock.name] = true;
                    this.$store.commit('updateStocks', stock)
                } else {
                    alert("You don't have that many stocks")
                }
            },
            enable(name){
                this.disabled[name] = false;
            }
        }
    }
</script>
