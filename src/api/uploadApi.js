import { postImgResponse } from '@/utils/mockData';
import apiClient from './apiClient';

export default {
  async postImgApi(formData) {
    try {
      const response = await apiClient.post('/submit', formData);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
