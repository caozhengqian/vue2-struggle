import Vue from "vue";
import Vuex from "vuex";
import lifeStore from "./modules/lifeStore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    lifeStore
  }
});
