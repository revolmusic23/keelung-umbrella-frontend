import domtoimage from 'dom-to-image';

export const triggerDomToImage = async (targetId, fileName = 'test') => {
  // DOM to Image
  const el = document.getElementById(targetId);
  const config = {
    quality: 1,
    style: {
      // filter: 'grayscale(100%)',
    },
  };

  // 未知套件 bug，第一次轉換通常會出現全白圖片，所以無腦多寫一次。
  const dataUrlTemp = await domtoimage.toPng(el, config);
  const dataUrl = await domtoimage.toPng(el, config);

  const link = document.createElement('a');
  link.download = `${fileName}.png`;
  link.href = dataUrl;
  link.click();
};

export const downloadImg = async (imageUrl, fileName = 'image.png') => {
  try {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('下載過程中發生錯誤：', error);
  }
};
