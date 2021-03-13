// import { home } from "../../api/request";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  str: "aaa",
  list: ["a", "b"],
  obj: { aKey: "aVal", bKey: "bVal" },
  objInList: ["a", { aKey: "aVal" }],
  listInObj: { a: ["b", "c"] }
});

// actions
const actions = {
  cStr({ commit, state }, params) {
    console.log(`%c ${state}`, "color:red");
    commit("getNewProducts", params);
  }
};

// mutations
const mutations = {};

export default {
  state,
  actions,
  mutations
};
