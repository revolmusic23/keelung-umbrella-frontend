<template>
  <BaseGridLayout :cards="cards">
    <template #card="{ item }">
      <v-card
        class="pa-4"
        border
        outlined
        @click="() => emit('navigate-to-gallery-info', item.uuid)"
      >
        <v-img
          aspect-ratio="1/1"
          :src="item.images[0].image_path"
          cover
          class="img-container"
          style="aspect-ratio: 1/1"
        ></v-img>
        <!-- <v-card-title>{{ item.title }}</v-card-title> -->
        <v-card-text class="px-0 pb-0 photo-text">{{ item.description }}</v-card-text>
      </v-card>
    </template>
  </BaseGridLayout>
</template>

<script setup>
import { computed } from 'vue';
import BaseGridLayout from './BaseGridLayout.vue';

const props = defineProps({
  cards: {
    type: Array,
  },
});

const emit = defineEmits(['navigate-to-gallery-info']);

const cards = computed(() => props.cards);
</script>

<style lang="scss" scoped>
.img-container {
  box-shadow: inset 0px 0px 20px rgba(#000, .2);
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
