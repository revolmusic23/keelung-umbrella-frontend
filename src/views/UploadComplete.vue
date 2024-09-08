<template>
  <v-sheet
    class="pa-4 text-center mx-auto"
    elevation="4"
    max-width="500"
    rounded="lg"
    width="100%"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">上傳成功！</h2>
    <p class="mb-4 text-medium-emphasis text-body-2">
      恭喜您上傳成功！<br />
      請點選上方主選單前往其他頁面。
    </p>
    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        variant="flat"
        width="90"
        rounded
        @click="router.push({ name: 'Gallery' })"
      >
        完成
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss" scoped></style>
