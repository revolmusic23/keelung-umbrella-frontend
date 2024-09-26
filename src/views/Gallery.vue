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
};

const navigateToGalleryInfo = (uuid) => {
  console.log(uuid);
  // router.push({
  //   name: ''
  // })
  router.push(`/gallery/${uuid}`);
  // router.push({
  //   name: 'GalleryInfo',
  //   query: { gallery_id: gallery_id },
  // });
};
</script>

<style></style>
