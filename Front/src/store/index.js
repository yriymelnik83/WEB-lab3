import { createStore } from "vuex";
import Model from "../model/Model";
export default createStore({
  state: {
    Model: new Model(),
  },
  mutations: {
    PUSH(state, item) {
      state.Model.push(item);
    },
    CLEAR(state) {
      state.Model.clear();
    },
    CALCULATE(state) {
      state.Model.calculate();
    },
    CLEAR_HISTORY(state) {
      state.Model.clearHistory();
    },
    DOWNLOAD_HISTORY(state) {
      state.Model.getHistoryFromServer();
    },
  },
  actions: {
    PUSH({ commit }, item) {
      commit("PUSH", item);
    },
    CLEAR({ commit }) {
      commit("CLEAR");
    },
    CALCULATE({ commit }) {
      commit("CALCULATE");
    },
  },
  modules: {},
});
