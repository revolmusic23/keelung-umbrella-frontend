<template>
  <v-dialog v-model="dialog" class="w-100 w-md-75" max-width="500">
    <v-card class="pa-4 rounded-lg">
      <v-btn
        icon="mdi-close"
        class="position-absolute"
        variant="text"
        @click="dialog = false"
      ></v-btn>
      <v-img src="images/family-multi.svg" class=""></v-img>
      <h2 class="modal-title mt-4">一起「傘人」1～2～3！</h2>
      <h3 class="modal-subtitle mb-4">傘人家族創意合照 手機攝影比賽</h3>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="btn-orange"
          @click="router.push({ name: 'UploadStepper' })"
        >
          上傳作品
        </v-btn>
        <v-btn class="btn-blue" @click="dialog = false"> 進入網站 </v-btn>
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
.v-card * {
  display: flex;
  justify-content: center;
}
.v-img {
  left: 50%;
  transform: translate(-50%, 0);
  width: 16vw;

  @media only screen and (max-width: 768px) {
    width: 40vw;
  }
}
.v-card-text {
  text-align: center;
}
.v-card-actions .v-btn {
  width: 100px;
}

.modal-subtitle {
  color: var(--primary-orange);
}

.modal-title {
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 1.6rem;
}
</style>
