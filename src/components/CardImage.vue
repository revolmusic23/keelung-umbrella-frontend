<template>
  <v-card
    class="pa-4 mb-4"
    border
    outlined
    color="grey-lighten-5"
    v-bind="$attrs"
  >
    <v-img
      aspect-ratio="1/1"
      :src="props.imgSrc"
      cover
      class="img-container"
      style="aspect-ratio: 1/1"
    ></v-img>

    <v-card-text class="px-0 pb-0 photo-text">
      {{ props.description }}
    </v-card-text>

    <v-card-actions v-if="$slots.actions" class="justify-end pa-0">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  imgSrc: String,
  description: String,
});
</script>

<style scoped>
.img-container {
  box-shadow: inset 0px 0px 20px rgba(#000, 0.2);
}

.photo-text {
  font-weight: bold;
  min-height: 76px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
