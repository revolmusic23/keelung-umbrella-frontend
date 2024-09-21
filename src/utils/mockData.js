import { computed } from 'vue';

export const postImgResponse = {
  status: 200,
  data: {
    message: 'Success posting image.',
  },
};

export const getGalleryInfoResponse = {
  status: 200,
  data: {
    title: '傘人家族示意圖',
    description: '一些關於圖片的敘述。',
    author: '葉大雄',
    src: '../images/three-umbrella.jpg',
  },
};

const galleryList = (page, page_size) => {
  const card = [];
  const startIdx = (page - 1) * page_size;
  const endIdx = page * page_size;
  for (let i = startIdx; i < endIdx; i++) {
    card.push({
      gallery_id: i,
      title: `傘人家族示意圖 ${i + 1}`,
      content: '一些關於圖片的敘述。',
    });
  }
  return card;
};

export const getGalleryListResponse = {
  status: 200,
  data: {
    total: 30,
    data: galleryList(1, 12),
  },
};
