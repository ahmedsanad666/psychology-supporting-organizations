import { createStore } from "vuex";

export default createStore({
  state: {
    dir: "ltr",
  },
  getters: {
    getDir(state) {
console.log(state.dir)
      return state.dir;
    },
  },
  mutations: {
    dir(state, payload) {
      state.dir = payload;
    },
  },
  actions: {
    changeDir(context, payload) {
      context.commit("dir", payload);
    },
  },
  modules: {},
});
