import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit('setLoading', isLoading);
    },
  },
  getters: {},
});
