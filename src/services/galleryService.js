import galleryApi from '@/api/galleryApi';

export default {
  async getGalleryInfo() {
    const response = await galleryApi.getGalleryInfoApi();
    return response;
  },

  async getGalleryList() {
    const response = await galleryApi.getGalleryListApi();
    return response.data;
  },
};
