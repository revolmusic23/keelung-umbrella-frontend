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
      return [undefined, response];
    } catch (error) {
      console.log(error);
      return [error, undefined];
    }
  },

  async getPolaroidApi(formData) {
    const response = await api.post('/submissions/process', formData);
    return response;
  },

  async getGalleryInfoApi(uuid) {
    // const response = getGalleryInfoResponse;
    const response = await api.get(`/submissions/${uuid}`);
    console.log(response);
    return response;
  },

  async getGalleryListApi() {
    const response = await api.get('/submissions');
    return response;
  },

  async getSubmissionsApi(params) {
    try {
      const response = await api.post('/submissions/verify', params);
      console.log(response);
      return [undefined, response];
    } catch (error) {
      return [error, undefined];
    }
  },

  async deleteImageApi(params) {
    const response = await api.delete('/submissions/detach', {
      data: params,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    console.log(response);
    return response;
  },
};
