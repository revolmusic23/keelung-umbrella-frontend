import uploadApi from '@/api/uploadApi';

export default {
  async postImg(userFormData, imgFormData) {
    const params = {
      ...userFormData,
      ...imgFormData,
    };
    const data = await uploadApi.postImgApi(params);
    return data;
  },
};
