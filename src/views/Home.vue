<template>
  <v-sheet
    class="mx-auto pa-md-8 pa-4 rounded-lg border position-relative"
    elevation="4"
    max-width="1200"
  >
    <v-img
      src="images/cloud-opacity.svg"
      width="200"
      class="position-absolute top-0 right-0 ma-4 d-none d-md-flex"
    ></v-img>

    <h1 class="page-title">關於傘人家族</h1>
    <h3 class="page-subtitle">城市指標更驚艷</h3>

    <div
      class="d-flex flex-sm-row flex-column align-center mt-4"
      style="gap: 2rem"
    >
      <v-img
        src="images/umb-family.png"
        class="w-sm-25 w-75 d-flex text-center"
      ></v-img>
      <div
        class="paragraph d-flex flex-column align-sm-start align-center justify-end"
      >
        <h4 class="paragraph-title">關於傘人家族</h4>
        <p>
          「傘人家族」是基隆城市指標系統中擔任城市的小小導覽員，將城市色彩和資訊相結合，串聯城市、生活和交通資源，你可以在孝三路商圈、城隍廟、崁仔頂、委託行商圈和許梓桑古厝等地找到他們喔。目前他們已分佈在
          18
          處，不管你看到的是優雅的「大傘」，俏皮的「小傘」，還是可愛的「小雲」，
          只要看到傘橘色的傘人家族，就趕緊拿起手機掃一掃 QR Code
          吧！小傘人們會帶你連接到基隆旅遊網，獲得景點的相關資訊。讓你的基隆旅程更加豐富趣味！
        </p>
      </div>
    </div>

    <div class="paragraph d-flex flex-column align-center my-8">
      <h4 class="paragraph-title">傘人家族大點名</h4>
      <div class="img-info-container w-100 d-sm-flex" style="gap: 2rem">
        <div :class="imgInfoClass">
          <div class="img-container">
            <v-img src="images/toy-1.png" contain></v-img>
          </div>
          <div :class="textInfoClass">
            <h2 class="orange-bold-text">大傘</h2>
            <p class="text-sm-center">
              撐著長傘，以優雅的姿態瀏覽基隆雨都的各種風貌。
            </p>
          </div>
        </div>
        <div :class="imgInfoClass">
          <div class="img-container">
            <v-img src="images/toy-2.png" contain></v-img>
          </div>
          <div :class="textInfoClass">
            <h2 class="orange-bold-text">小傘</h2>
            <p class="text-sm-center">頂著小傘，活潑且愉快的穿梭在大街小巷。</p>
          </div>
        </div>
        <div :class="imgInfoClass">
          <div class="img-container">
            <v-img src="images/toy-3.png" contain></v-img>
          </div>
          <div :class="textInfoClass">
            <h2 class="orange-bold-text">小雲</h2>
            <p class="text-sm-center">
              雲朵帶的雨滴，加入成為基隆傘人家族的一員。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="paragraph d-flex flex-column align-center">
      <h4 class="paragraph-title">尋找傘人家族</h4>
      <v-img src="images/family-map.jpg" class="w-100"></v-img>
    </div>
  </v-sheet>

  <HomeModal />
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import HomeModal from '@/components/HomeModal.vue';

const router = useRouter();

const HOME_TITLE = '就愛和你拍';
const SUBTITLE = '〈傘人家族〉創意合照競賽';

const imgInfoClass = [
  'img-info',
  'd-flex',
  'flex-sm-column',
  'align-center',
  'w-sm-33',
];
const textInfoClass = ['text-sm-center', 'w-75', 'w-sm-100'];
</script>

<style scoped lang="scss">
.img-container {
  margin-bottom: 1rem;
  position: relative;
  width: 200px;
  height: 200px;

  &::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: rgba(#164993, 0.1);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 960px) {
    width: 100px;
    height: 100px;
  }
}
</style>
