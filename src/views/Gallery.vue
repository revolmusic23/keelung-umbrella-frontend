<template>
  <!-- <v-container> -->
  <v-infinite-scroll :onLoad="getGalleryList" color="orange">
    <GalleryGrid
      :cards="galleryList"
      @navigate-to-gallery-info="navigateToGalleryInfo"
    />
  </v-infinite-scroll>
  <!-- </v-container> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import GalleryGrid from '@/components/Grid/GalleryGrid.vue';
import galleryService from '@/services/galleryService';

const router = useRouter();

const page = ref(1);
const pageSize = ref(12);
const galleryList = ref([]);

onMounted(async () => {
  // await getGalleryList();
});

const getGalleryList = async ({ done }) => {
  const response = await galleryService.getGalleryList(page, pageSize);
  galleryList.value.push(...response);
  console.log('galleryList:', galleryList.value);
  done('ok');
};

const navigateToGalleryInfo = (gallery_id) => {
  router.push({
    name: 'GalleryInfo',
    query: { gallery_id: gallery_id },
  });
};
</script>

<style></style>
