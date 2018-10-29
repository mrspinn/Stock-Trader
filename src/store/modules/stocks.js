const state = {
    stocks: [
        {name: 'Google', price: 100, active: false, change: 0},
        {name: 'BMW', price: 80, active: false, change: 0},
        {name: 'Apple', price: 250, active: false, change: 0},
        {name: 'Twitter', price: 25, active: false, change: 0}
    ]
};

const mutations = {
    randomizeStocks: (state) => {
        state.stocks.forEach(item => {
            let priceChange = getRandomInt(-parseInt(item.price/2), parseInt(item.price/1.8))
            item.price += priceChange;
            item.change = priceChange;
        });
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }  
    },
    setStocks: (state, payload) => {
        state.stocks = payload.stocks;
    }
};

const actions = {
    endDay: ({commit}) => {
        commit('randomizeStocks')
    },
    buyStocks: ({commit}, payload) => {
        commit('updateStocks', payload)
    }
};

const getters = {
    getStocks: state => {
        return state.stocks;
    },
    getStockChange: state => (name) => {
        return state.stocks.find(obj => obj.name === name).change;
    },
    getStockPrice: state => (name) => {
        return state.stocks.find(obj => obj.name === name).price;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}