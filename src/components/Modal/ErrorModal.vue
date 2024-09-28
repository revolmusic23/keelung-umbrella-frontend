<template>
  <!-- TODO: showModal 用 computed 會出問題，做到一半 -->
  <v-dialog v-model="showModal" class="w-100 w-md-75" max-width="500">
    <v-card class="pa-2 rounded-lg">
      <v-card-title>發生錯誤</v-card-title>
      <v-card-text>
        {{ errorMessage }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="red" variant="elevated" @click="showModal = false"
          >關閉</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  errorMessage: {
    type: String,
    default: '請重新整理或再試一次。',
  },
  showModal: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:showModal']);

const router = useRouter();
const showModal = ref(true);
</script>

<style scoped lang="scss"></style>
