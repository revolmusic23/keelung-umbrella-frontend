import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: false,
    showErrorModal: false,
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
    setShowErrorModal(state, value) {
      state.showErrorModal = value;
    },
  },
  actions: {
    setLoading({ commit }, value) {
      commit('setLoading', value);
    },
    setShowErrorModal({ commit }, value) {
      commit('setShowErrorModal', value);
    },
  },
  getters: {},
});
