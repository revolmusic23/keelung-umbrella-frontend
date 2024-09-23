<template>
  <PolaroidImage
    :imgSrc="imgUrl"
    :title="imgFormData.title"
    :description="imgFormData.description"
  />
</template>

<script setup>
import { watch, computed } from 'vue';
import PolaroidImage from '@/components/PolaroidImage.vue';

const props = defineProps({
  imgFormData: Object,
  imgUrl: String,
});
</script>

<style></style>
