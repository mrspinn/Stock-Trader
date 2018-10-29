<template>
    <div class="container-fluid my-3">
        <nav class="navbar navbar-expand navbar-light bg-light border">
                <ul class="navbar-nav mr-auto">
                    <router-link 
                        to="/"
                        tag="li"
                        class="nav-item active"
                        ><a class="nav-link">Stock Trader</a>
                    </router-link>
                    <router-link 
                        to="/Portfolio"
                        tag="li"
                        class="nav-item"
                        ><a class="nav-link">Portfolio</a>
                    </router-link>
                    <router-link 
                        to="/Stocks"
                        tag="li"
                        class="nav-item"
                        ><a class="nav-link">Stocks</a>
                    </router-link>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"
                        @mouseover="dropdown = true" 
                        @mouseout="dropdown = false">
                        <a class="nav-link dropdown-toggle" href="#" 
                        >Save &amp; Load</a>
                        <div class="dropdown bg-light" v-if="dropdown">
                            <a class="dropdown-item" @click="saveData">Save</a>
                            <a class="dropdown-item" @click="loadData">Load</a>
                        </div>
                    </li>
                    <li class="nav-item" @click="endDay">
                        <a class="nav-link" style="cursor: pointer;">End Day</a>
                    </li>
                    <li class="nav-brand"><a class="nav-link active">Funds: ${{ funds | addCommas }}</a></li>
                </ul>
                
        </nav>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from "vuex";
    import { mapMutations } from "vuex";


    export default {
        data(){
            return {
                dropdown: false
            }
        },
        computed: {
            saveObject() {
                var dateFormat = require('dateformat');
                var now = new Date();
                return {
                    funds,
                    portfolio: this.$store.state.portfolio,
                    stocks: this.$store.state.stocks,
                    date: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                }
            },
            funds(){
                return this.$store.getters.getFunds;
            }
        },
        methods: {
            ...mapMutations([
                'setSaves'
            ]), ...mapActions([
                'loadSaves',
                'endDay'
            ]),
            saveData() {
                this.$http.post('data.json', this.saveObject).then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
            },
            loadData() {
                this.$http.get('data.json').then(response => {
                    return response.json();
                }).then(data => {
                                      
                    const resultArray = [];
                    for (let key in data){
                        resultArray.push(data[key]);
                    }
                    if (resultArray.length > 0) {
                        this.$store.dispatch('loadSaves', resultArray);
                        this.$router.push({ path: 'load' })
                    }
                });
            }
        }
    }

</script>

<style>
    .dropdown{
        list-style-type: none;
        position: absolute;
        z-index: 2;
        border: 1px solid #aaa;
        padding: 3px;
        border-top: none;
        text-align: left;

    }
    .dropdown-item {
        cursor: pointer;
    }
    .dropdown-item:hover {
        background-color: #eee;
        text-decoration: underline;
    }
    .container-fluid {
        padding: 0;
    }
    
</style>
