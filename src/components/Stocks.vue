<template>
    <div class="row justify-content-center">
        <div class="card col-5 m-4 px-0 border-secondary" v-for="stock in getStocks" :key="stock.id">
            <div class="card-header bg-success">
                <p class="d-inline">{{stock.name}} </p>
                <p class="font-weight-light d-inline"> Price: {{stock.price}}  ({{stock.change}})</p>
            </div>
            <div class="card-body bg-white">
                <input type="number" 
                    class="form-control d-inline" 
                    placeholder="Quantity" 
                    style="width: 50%;" 
                    v-model=entered[stock.name]
                    @keyup.enter="buyStocks({name: stock.name, quantity: entered[stock.name], price: stock.price})"
                    @input="enable(stock.name)">
                <button     
                    class="btn btn-success float-right" 
                    :disabled="disabled[stock.name]"
                    @click="buyStocks({name: stock.name, quantity: entered[stock.name], price: stock.price})"
                    >Buy</button>
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
                'getStocks',
                'getFunds'
            ])
        },
        methods: {
            buyStocks(obj){
                if (obj.quantity > 0) {
                    if (this.getFunds >= obj.price * obj.quantity) {
                        this.entered[obj.name] = true;
                        this.disabled[obj.name] = true;
                        this.$store.dispatch('buyStocks', obj)
                    } else alert("You do not have enough funds for that purchase");
                } else alert("Please enter a quantity to purchase");
            },
            enable(name){
                this.disabled[name] = false;
            }
            
        }
    }
</script>

