<template>
  <v-sheet
    class="mx-auto pa-4 rounded-lg border"
    elevation="4"
    max-width="1200"
  >
    <div v-for="(paragraph, idx) in paragraphs" :key="idx">
      <PageTitle :title="paragraph.title" class="mb-4" />
      <p v-html="paragraph.content" class="mb-4 ml-2"></p>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from 'vue';
import { paragraphs } from './activityContent';
import { WEBSITE_URL } from '@/utils/constants';

import PageTitle from '@/components/PageTitle.vue';
</script>

<style lang="scss">
.paragraph-title {
  margin-top: 1em;
  margin-bottom: 1em;
}
ul,
ol {
  margin-left: 1.4em;
}
</style>
