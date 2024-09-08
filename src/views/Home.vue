<template>
  <v-sheet
    class="py-4 py-md-8 px-0 mx-auto"
    elevation="4"
    rounded="lg"
    width="100%"
  >
    <v-img src="/images/wandering-in-keelung.png" class="mb-4"></v-img>
    <div class="home-content px-md-8">
      <h1 class="home-title text-center">{{ HOME_TITLE }}</h1>
      <h4 class="subtitle mb-4 text-center">{{ SUBTITLE }}</h4>
      <div class="mb-4 d-flex justify-center ga-2">
        <v-icon size="36">mdi-vote</v-icon>
        <div style="font-size: 0.8rem">
          <div>活動時間：10/10 - 10/30</div>
          <div>目前參與人數：500 人</div>
        </div>
      </div>
      <p class="mx-auto mb-4 details w-sm-75">
        鑒於三隻公仔在廣場上的吸睛效果和拍照熱點的設定，
        期待民眾能夠透過與公仔進行創意合照互動。<br />
        進入本活動架設之網站，可以進一步認識到「傘人家族」的故事，
        並發現其他家族成員分布在基隆的哪些角落等待民眾去探索，
        完成操作後可兌換文宣小物一份。
      </p>

      <div class="button-container">
        <v-btn
          class="btn-orange"
          @click="router.push({ name: 'UploadStepper' })"
        >
          上傳圖片
        </v-btn>
        <v-btn class="btn-blue" @click="router.push({ name: 'Gallery' })">
          作品頁面
        </v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const HOME_TITLE = '就愛和你拍';
const SUBTITLE = '〈傘人家族〉創意合照競賽';
</script>

<style scoped lang="scss">
@import '@/assets/styles/buttons.scss';
.home-page {
  background: white;
  // margin-left: -16px;
  // margin-right: -16px;
  margin: -16px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.home-content {
  padding-left: 16px;
  padding-right: 16px;
}
.home-title {
  // letter-spacing: 2px;
  font-size: 1.2rem;
}
.subtitle {
  font-size: 1rem;
  font-weight: 400;
}
.details {
  font-size: 0.9rem;
}
.button-container {
  @include flex-center();
  gap: 1em;
}
</style>
