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
