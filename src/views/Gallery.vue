<template>
  <v-infinite-scroll :onLoad="getGalleryList" color="orange">
    <GalleryGrid
      :cards="galleryList"
      @navigate-to-gallery-info="navigateToGalleryInfo"
    />
  </v-infinite-scroll>

  <XScrollToTopButton />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import GalleryGrid from '@/components/Grid/GalleryGrid.vue';
import services from '@/services/services';

const router = useRouter();

const pagination = ref({
  current_page: 0,
  last_page: Infinity,
});

const galleryList = ref([]);

const getGalleryList = async ({ done }) => {
  try {
    let tempList;
    [tempList, pagination.value] = await services.getGalleryList();

    galleryList.value.push(...tempList);
    console.log('galleryList:', galleryList.value);
    console.log('pagination:', pagination.value);
    if (pagination.value.current_page < pagination.value.last_page) {
      done('ok');
    } else {
      done('empty');
    }
  } catch (error) {
    done('empty');
  }
};

const navigateToGalleryInfo = (uuid) => {
  router.push(`/gallery/${uuid}`);
};
</script>

<style></style>
