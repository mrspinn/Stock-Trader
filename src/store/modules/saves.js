import {router} from "../../main.js"

const state = {
    saves: []
};

const mutations = {
    setSaves: (state, payload) => {
        state.saves = payload;
    }
};

const actions = {
    loadSaves: ({commit}, payload) => {
        commit('setSaves', payload);
    },
    newState: ({commit}, payload) => {
        commit('setStocks', payload);
        commit('setPortfolio', payload);
        router.push({path: "/"})
    },
};

const getters = {
    getSaves: state => {
        return state.saves;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}