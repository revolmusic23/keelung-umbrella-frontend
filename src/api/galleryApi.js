import {
  getGalleryInfoResponse,
  getGalleryListResponse,
} from '@/utils/mockData';

export default {
  async getGalleryInfoApi(params) {
    const response = getGalleryInfoResponse;
    return response.data;
  },

  async getGalleryListApi(params) {
    const response = getGalleryListResponse;
    return response.data;
  },
};
