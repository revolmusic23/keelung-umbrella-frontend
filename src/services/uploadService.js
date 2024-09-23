import uploadApi from '@/api/uploadApi';

export default {
  async postImg(userFormData, imgFormData) {
    const formdata = new FormData();
    formdata.append('name', userFormData.name);
    formdata.append('email', userFormData.email);
    formdata.append('phone', userFormData.phone);
    formdata.append('images[]', imgFormData.img);
    for (let [key, value] of formdata.entries()) {
      if (value instanceof File) {
        console.log(key, value.name);
      } else {
        console.log(key, value);
      }
    }
    const data = await uploadApi.postImgApi(formdata);
    return data;
  },
};
