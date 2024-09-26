<template>
  <v-sheet
    class="pa-8 text-center mx-auto"
    elevation="4"
    max-width="500"
    rounded="lg"
    width="100%"
  >
    <PolaroidImage
      :imgSrc="galleryInfo.src"
      :title="galleryInfo.title"
      :description="galleryInfo.description"
    />
  </v-sheet>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import services from '@/services/services';
import PolaroidImage from '@/components/PolaroidImage.vue';

const route = useRoute();

const galleryInfo = reactive({});

onMounted(async () => {
  const response = await services.getGalleryInfo(route.query.gallery_id);
  Object.assign(galleryInfo, response);
});
</script>

<style lang="scss" scoped></style>
