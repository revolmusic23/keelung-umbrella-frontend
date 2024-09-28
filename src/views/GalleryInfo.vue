<template>
  <XLoadingCircle v-if="isLoading" />
  <v-sheet
    v-else
    class="pa-8 mx-auto"
    elevation="4"
    max-width="500"
    rounded="lg"
    width="100%"
  >
    <XCardImage
      :imgSrc="galleryInfo.src"
      :description="galleryInfo.description"
    />

    <h4>作者：{{ galleryInfo.author }}</h4>

    <!-- <PolaroidImage
      :imgSrc="galleryInfo.src"
      :title="galleryInfo.title"
      :description="galleryInfo.description"
    /> -->
  </v-sheet>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import services from '@/services/services';
// import PolaroidImage from '@/components/PolaroidImage.vue';

const props = defineProps({
  uuid: String,
});

const route = useRoute();
const store = useStore();
const isLoading = computed(() => store.state.isLoading);

const galleryInfo = ref({
  src: '',
  title: '',
  description: '',
});

onMounted(() => {
  getGalleryInfo();
});

const getGalleryInfo = async () => {
  try {
    const data = await services.getGalleryInfo(props.uuid);
    console.log(data);
    setGalleryInfo(data);
  } catch (error) {
    console.log(error);
  }
};

const setGalleryInfo = (data) => {
  galleryInfo.value = {
    src: data.images[0].image_path,
    title: data.title,
    description: data.description,
    author: data.author,
  };
};
</script>

<style lang="scss" scoped></style>
