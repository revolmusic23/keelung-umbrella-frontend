<template>
  <BaseGridLayout :cards="cards">
    <template #card="{ item, index }">
      <v-card
        class=""
        border
        outlined
        @click="() => emit('navigate-to-gallery-info', item.gallery_id)"
      >
        <v-img aspect-ratio="1/1" src="/images/image-test.jpg" cover></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text class="">{{ item.content }}</v-card-text>
        <!-- <v-card-actions>
          <v-btn text> btn {{ index + 1 }}</v-btn>
        </v-card-actions> -->
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

<style></style>
