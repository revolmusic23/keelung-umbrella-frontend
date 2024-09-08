import { postImgResponse } from '@/utils/mockData';

export default {
  async postImgApi(params) {
    const response = postImgResponse;
    if (response.status === 200) {
      return response.data;
    }
  },
};
