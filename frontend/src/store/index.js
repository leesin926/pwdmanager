import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex);
// store.js 或 store/index.js
const state = {
  userId: null,
};

const mutations = {
  SET_USER_ID(state, id) {
    state.userId = id;
  },
};

const actions = {
  setUserId({ commit }, id) {
    commit('SET_USER_ID', id);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});