<template>
  <v-dialog v-model="dialog" class="w-100 w-md-75" max-width="500">
    <v-card class="pa-2 rounded-lg">
      <v-btn
        icon="mdi-close"
        class="position-absolute"
        variant="text"
        @click="dialog = false"
      ></v-btn>
      <v-img src="images/family-multi.svg" :width="100" class=""></v-img>
      <v-card-text>
        一起「傘人」1～2～3！ <br />
        傘人家族創意合照 手機攝影比賽
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="btn-orange"
          @click="router.push({ name: 'UploadStepper' })"
        >
          上傳圖片
        </v-btn>
        <v-btn class="btn-blue" @click="router.push({ name: 'Gallery' })">
          作品頁面
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const dialog = ref(true);
</script>

<style scoped lang="scss">
@import '@/assets/styles/buttons.scss';
.v-card * {
  display: flex;
  justify-content: center;
}
.v-img {
  left: 50%;
  transform: translate(-50%, 0);
}
.v-card-text {
  text-align: center;
}
.v-card-actions .v-btn {
  width: 100px;
}
</style>
