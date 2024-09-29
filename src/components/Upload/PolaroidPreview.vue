<template>
  <div class="mb-8">
    <XCardImage
      id="upload-image"
      :imgSrc="imgUrl"
      :description="imgFormData.description"
      color="grey-lighten-4"
    />
    <div class="d-flex mt-2 justify-center">
      <v-btn
        @click="downloadImage"
        :loading="loadingDownload"
        class="btn-blue"
        rounded
        >下載</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';
import { triggerDomToImage } from '@/utils/imgUtils';
import PolaroidImage from '@/components/PolaroidImage.vue';

const props = defineProps({
  imgFormData: Object,
  imgUrl: String,
});

const loadingDownload = ref(false);

const downloadImage = async () => {
  loadingDownload.value = true;
  try {
    const response = await triggerDomToImage(
      'upload-image',
      `${props.imgFormData.author}-${props.imgFormData.title}`
    );
  } catch (error) {
    console.log('Error in downloadImage', error);
  } finally {
    loadingDownload.value = false;
  }
};
</script>

<style></style>
