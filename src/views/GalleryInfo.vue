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

const props = defineProps({
  uuid: String,
});

const route = useRoute();

const galleryInfo = ref({
  src: '',
  title: '',
  description: '',
});

onMounted(async () => {
  const data = await services.getGalleryInfo(props.uuid);
  // console.log(response);
  console.log(data);
  galleryInfo.value = data;
  // galleryInfo.value = {
  //   src: data.images[0].image_path,
  //   title: data.title,
  //   description: data.description,
  // };
  // Object.assign(galleryInfo, response);
});
</script>

<style lang="scss" scoped></style>
