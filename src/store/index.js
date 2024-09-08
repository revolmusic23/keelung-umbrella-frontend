import { createStore } from 'vuex'

export default createStore({
  state: {
    uploadedImages: [],
  },
  mutations: {
    addUploadedImage(state, imageUrl) {
      state.uploadedImages.push(imageUrl)
    },
  },
  actions: {
    uploadImage({ commit }, imageFile) {
      // 這裡應該是上傳圖片到服務器的邏輯
      // 現在我們只是模擬上傳
      const fakeImageUrl = URL.createObjectURL(imageFile)
      commit('addUploadedImage', fakeImageUrl)
    },
  },
  getters: {
    getUploadedImages: (state) => state.uploadedImages,
  },
})
