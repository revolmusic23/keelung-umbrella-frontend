<template>
  <v-sheet
    class="pa-8 text-center mx-auto"
    elevation="4"
    max-width="500"
    rounded="lg"
    width="100%"
  >
    <v-img class="mb-4" src="images/image-test.jpg"></v-img>

    <div class="text-start">
      <h2 class="mb-2">{{ galleryInfo.title }}</h2>
      <h4 class="mb-2">作者：{{ galleryInfo.author }}</h4>
      <p class="">{{ galleryInfo.description }}</p>
    </div>
  </v-sheet>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import galleryService from '@/services/galleryService';

const route = useRoute();

const galleryInfo = reactive({});

onMounted(async () => {
  const response = await galleryService.getGalleryInfo(route.query.gallery_id);
  Object.assign(galleryInfo, response);
});
</script>

<style lang="scss" scoped></style>
