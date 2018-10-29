const state = {
    portfolio: [],
    funds: 10000
};

const mutations = {
    setPortfolio: (state, payload) => {
        
        state.portfolio = payload.portfolio;
        state.funds = payload.funds;
    },
    updateStocks: (state, payload) => {
        
        let portfolioEntry = state.portfolio.find(obj => obj.name === payload.name);         
        if (portfolioEntry) {
            portfolioEntry.quantity += parseInt(payload.quantity);
            if (portfolioEntry.quantity <= 0) {
                state.portfolio.splice(state.portfolio.findIndex(obj => obj.name === payload.name), 1);
            }
            console.log(payload.price);
            
            let purchasePrice = payload.quantity * payload.price;
            
            state.funds -= purchasePrice;
        } else {
            state.portfolio.push({name: payload.name, quantity: parseInt(payload.quantity)});
            let purchasePrice = payload.quantity * payload.price;
            state.funds -= purchasePrice;
        }            
    }
};

const actions = {
    sellStocks: ({commit}, payload) => {
        commit('sellStocks', payload);
    }
};

const getters = {
    getFunds: state => {
        return state.funds;
    },
    getPortfolio: state => {
        return state.portfolio;
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}