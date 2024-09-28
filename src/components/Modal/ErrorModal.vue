<template>
  <XBaseModal v-model="showModal">
    <template #title>
      <div class="mx-4 mt-2">發生錯誤</div>
    </template>
    <template #text>
      <div class="mx-2">{{ errorMessage }}</div>
    </template>
    <template #actions>
      <v-btn color="red" variant="elevated" @click="showModal = false"
        >關閉</v-btn
      >
    </template>
  </XBaseModal>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
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
const showModal = ref(false);

watch(
  () => props.showModal,
  (newVal) => {
    showModal.value = newVal;
  }
);
</script>

<style scoped lang="scss"></style>
