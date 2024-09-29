<template>
  <div class="mb-8">
    <XLoadingCircle v-if="isLoading" />
    <div class="d-flex flex-colum align-center">
      <v-img :src="imgSrc"></v-img>
    </div>
  </div>
</template>

<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

import { triggerDomToImage } from '@/utils/imgUtils';
import PolaroidImage from '@/components/PolaroidImage.vue';
import services from '@/services/services';

const store = useStore();

const props = defineProps({
  imgFormData: Object,
  imgUrl: String,
});

const isLoading = computed(() => store.state.isLoading);

const imgSrc = ref('');
const errorMessage = ref('');

onMounted(async () => {
  [errorMessage.value, imgSrc.value] = await services.getPolaroid(
    props.imgFormData
  );
});

// const loadingDownload = ref(false);

// const downloadImage = async () => {
//   loadingDownload.value = true;
//   try {
//     const response = await triggerDomToImage(
//       'upload-image',
//       `${props.imgFormData.author}-${props.imgFormData.title}`
//     );
//   } catch (error) {
//     console.log('Error in downloadImage', error);
//   } finally {
//     loadingDownload.value = false;
//   }
// };
</script>

<style></style>
