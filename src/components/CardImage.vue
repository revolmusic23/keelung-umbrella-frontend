<template>
  <v-card class="pa-4 mb-4" border outlined color="grey-lighten-4">
    <v-img
      aspect-ratio="1/1"
      :src="props.imgSrc"
      cover
      class="img-container"
      style="aspect-ratio: 1/1"
    ></v-img>
    <v-card-text class="px-0 pb-0 text-start">
      {{ props.description }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  imgSrc: String,
  description: String,
});
</script>

<style scoped></style>
