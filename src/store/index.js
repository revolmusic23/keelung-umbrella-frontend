import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: false,
    showErrorModal: false,
    errorMessage: '',
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
    setShowErrorModal(state, { value, errorMessage }) {
      state.showErrorModal = value;
      state.errorMessage = errorMessage;
    },
  },
  actions: {
    setLoading({ commit }, value) {
      commit('setLoading', value);
    },
    setShowErrorModal({ commit }, { value, errorMessage }) {
      commit('setShowErrorModal', { value, errorMessage });
    },
  },
  getters: {},
});
