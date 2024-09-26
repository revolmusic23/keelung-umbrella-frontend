import { postImgResponse } from '@/utils/mockData';
import api from './api';

import {
  getGalleryInfoResponse,
  getGalleryListResponse,
} from '@/utils/mockData';

export default {
  async postImgApi(formData) {
    try {
      const response = await api.post('/submissions', formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getGalleryInfoApi(uuid) {
    const response = getGalleryInfoResponse;
    // const response = await api.get(`/submissions/${uuid}`);
    console.log(response);
    return response;
  },

  async getGalleryListApi(params) {
    try {
      const response = await api.get('/submissions');
      return response;
    } catch (error) {
      console.error('Error fetching submissions:', error);
      throw error;
    }
  },
};
