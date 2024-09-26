import { postImgResponse } from '@/utils/mockData';
import api from './api';

import {
  getGalleryInfoResponse,
  getGalleryListResponse,
} from '@/utils/mockData';

export default {
  async postImgApi(formData) {
    try {
      const response = await api.post('/submit', formData);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getGalleryInfoApi(params) {
    const response = getGalleryInfoResponse;
    return response.data;
  },

  async getGalleryListApi(params) {
    const response = getGalleryListResponse;
    return response.data;
  },
};
