import apiClient from '@/api/apiClient';

export default {
  async postImg(userFormData, imgFormData) {
    const formdata = new FormData();
    formdata.append('name', userFormData.name);
    formdata.append('nid', userFormData.idNo);
    formdata.append('email', userFormData.email);
    formdata.append('phone', userFormData.phone);
    formdata.append('author', imgFormData.author);
    formdata.append('title', imgFormData.title);
    formdata.append('description', imgFormData.description);
    formdata.append('images[]', imgFormData.img);

    // console.log(userFormData, imgFormData);
    // for (let [key, value] of formdata.entries()) {
    //   if (value instanceof File) {
    //     console.log(key, value.name);
    //   } else {
    //     console.log(key, value);
    //   }
    // }

    const [error, response] = await apiClient.postImgApi(formdata);

    if (response) {
      console.log('post image response:', response);
      return [undefined, response.data];
    } else {
      return [error.response.data.message, undefined];
    }
  },

  async getPolaroid(imgFormData) {
    const formdata = new FormData();
    formdata.append('description', imgFormData.description);
    formdata.append('images[]', imgFormData.img);

    try {
      const response = await apiClient.getPolaroidApi(formdata);
      return [undefined, response.data.data.images[0].framed_image_path];
    } catch (error) {
      return [error, undefined];
    }
  },

  async getGalleryInfo(uuid) {
    try {
      const response = await apiClient.getGalleryInfoApi(uuid);
      console.log(response);
      const data = response.data.data;
      return [
        undefined,
        {
          src: data.images[0].image_path,
          title: data.title,
          description: data.description,
          author: data.author,
          number: data.number,
        },
      ];
    } catch (error) {
      return [error.response.data.message, undefined];
    }
  },

  async getGalleryList() {
    const response = await apiClient.getGalleryListApi();
    return [response.data.data, response.data.pagination];
  },

  async getSubmissions(params) {
    const [error, response] = await apiClient.getSubmissionsApi(params);

    if (response) {
      console.log(response);
      return [undefined, response.data.data];
    } else {
      console.log(error.response.data.message);
      return [error.response.data.message, undefined];
    }
  },

  async deleteImage(params) {
    console.log(params);
    try {
      const response = await apiClient.deleteImageApi(params);
      return [undefined, response];
    } catch (error) {
      return [error, undefined];
    }
  },
};
