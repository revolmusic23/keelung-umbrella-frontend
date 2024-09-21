<template>
  <canvas
    ref="canvas"
    :width="canvasSize.width"
    :height="canvasSize.height"
    style="display: none"
  ></canvas>
  <img
    v-if="canvasSrc"
    :src="canvasSrc"
    style="width: 100%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
  />
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';

const props = defineProps({
  imgSrc: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const CANVAS_WIDTH = 450;
const CANVAS_PADDING = 20;

const galleryInfo = reactive({});
const canvasSrc = ref(null);
const originalImg = ref(null);
const drawImgSize = reactive({
  width: 0,
  height: 0,
});
const canvasSize = reactive({
  width: CANVAS_WIDTH,
  height: 0,
});

watch(
  () => props.imgSrc,
  async (newVal) => {
    if (newVal) {
      await generateImage(props.imgSrc);
    }
  }
);

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const generateImage = async (src) => {
  try {
    originalImg.value = await loadImage(props.imgSrc || src);
    // console.log(originalImg.value);
    console.log(originalImg.value.width, originalImg.value.height);

    setDrawImageSize(originalImg.value.width, originalImg.value.height);
    setCanvasSize(drawImgSize.width, drawImgSize.height);

    const canvas = document.createElement('canvas');
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    console.log(canvasSize, drawImgSize);

    const ctx = canvas.getContext('2d');
    drawCanvasBackground(ctx);
    drawCanvasImage(ctx);
    drawCanvasText(ctx);
    canvasSrc.value = canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Error generating image:', error);
  }
};

const setCanvasSize = (imgWidth, imgHeight) => {
  canvasSize.width = CANVAS_WIDTH;
  canvasSize.height = imgHeight + 120;
};

const setDrawImageSize = (width, height) => {
  drawImgSize.width = CANVAS_WIDTH - CANVAS_PADDING * 2;
  if (width === height) {
    drawImgSize.height = drawImgSize.width;
  } else if (width > height) {
    drawImgSize.height = drawImgSize.width * Math.max(height / width, 9 / 16);
  } else {
    drawImgSize.height = drawImgSize.width * Math.min(height / width, 3 / 2);
  }
  console.log(drawImgSize);
};

const drawCanvasBackground = (ctx) => {
  ctx.fillStyle = 'GhostWhite';
  ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
};

const drawCanvasImage = (ctx) => {
  const scale = drawImgSize.width / originalImg.value.width;
  const scaledImgSize = {
    width: originalImg.value.width * scale,
    height: originalImg.value.height * scale,
  };
  console.log(originalImg.value.width, originalImg.value.height);
  console.log(drawImgSize);
  console.log(scaledImgSize);
  const imgPosition = {
    x: (scaledImgSize.width - drawImgSize.width) / 2,
    y: (scaledImgSize.height - drawImgSize.height) / 2,
  };
  console.log(imgPosition);

  // TODO: 要換邏輯，擷取原圖的座標跟寬高是要用原始尺寸，canvas 會自動把擷取尺寸 fit 所選的畫布尺寸
  ctx.drawImage(
    originalImg.value,
    // 原圖擷取起始座標
    imgPosition.x,
    imgPosition.y,
    // 原圖擷取的寬高
    drawImgSize.width / scale,
    drawImgSize.height / scale,
    // 畫布動筆起始座標
    CANVAS_PADDING,
    CANVAS_PADDING,
    // 畫布動筆的寬高
    drawImgSize.width,
    drawImgSize.height
  );
};

const drawCanvasText = (ctx) => {
  let nextY = CANVAS_PADDING + drawImgSize.height + 40;

  nextY = drawText(
    ctx,
    props.title ? props.title : '-',
    20,
    canvasSize.width - CANVAS_PADDING * 2,
    nextY
  );
  nextY += 10; // 在標題和描述之間添加一些間距

  drawText(
    ctx,
    props.description ? props.description : '-',
    14,
    canvasSize.width - CANVAS_PADDING * 2,
    nextY
  );
};

const drawText = (ctx, text, fontSize, maxWidth, y) => {
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = 'black';
  const words = text.split(' ');
  let line = '';
  let lineHeight = fontSize * 1.2; // 行高略大於字體大小
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, CANVAS_PADDING, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, CANVAS_PADDING, currentY);
  return currentY + lineHeight; // 返回下一行的 Y 坐標
};
</script>

<style lang="scss" scoped></style>
