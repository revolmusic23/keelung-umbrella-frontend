<template>
  <v-sheet class="mx-auto pa-4 rounded-lg border" elevation="4" max-width="500">
    <PageTitle title="關於傘人家族" class="mb-2" />
    <p>
      「傘人家族」是基隆城市指標系統中擔任城市的小小導覽員，將城市色彩和資訊相結合，串聯城市、生活和交通資源，你可以在孝三路商圈、城隍廟、崁仔頂、委託行商圈和許梓桑古厝等地找到他們喔。<br />
      目前他們已分佈在 18
      處，不管你看到的是優雅的「大傘」，俏皮的「小傘」，還是可愛的「小雲」，只要看到傘橘色的傘人家族，就趕緊拿起手機掃一掃
      QR Code 吧！<br />
      小傘人們會帶你連接到基隆旅遊網，獲得景點的相關資訊。讓你的基隆旅程更加豐富趣味！
    </p>
  </v-sheet>

  <HomeModal />
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import PageTitle from '@/components/PageTitle.vue';
import HomeModal from '@/components/HomeModal.vue';

const router = useRouter();

const HOME_TITLE = '就愛和你拍';
const SUBTITLE = '〈傘人家族〉創意合照競賽';
</script>

<style scoped lang="scss">
@import '@/assets/styles/buttons.scss';
.page-title {
  display: flex;
  align-items: center;
  letter-spacing: 1.4px;
}
</style>
