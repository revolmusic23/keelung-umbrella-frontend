<template>
  <v-container :class="containerClass">
    <v-row>
      <v-col
        v-for="(item, index) in cards"
        :key="index"
        :cols="xsCols"
        :sm="smCols"
        :md="mdCols"
        :lg="lgCols"
      >
        <slot name="card" :item="item" :index="index"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    requited: true,
  },
  containerClass: {
    type: String,
    default: 'pa-0',
  },
  xsCols: {
    type: [Number, String],
    default: 12,
  },
  smCols: {
    type: [Number, String],
    default: 6,
  },
  mdCols: {
    type: [Number, String],
    default: 4,
  },
  lgCols: {
    type: [Number, String],
    default: 3,
  },
});
</script>

<style></style>
