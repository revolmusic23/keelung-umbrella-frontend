<template>
  <XBaseModal v-model="showModal">
    <template #title>
      <div class="ml-4 mt-2">刪除作品</div>
    </template>
    <template #text>
      <div class="ml-2">刪除後將無法復原，確定要刪除嗎？</div>
    </template>
    <template #actions>
      <div class="d-flex ga-4 mb-2 mr-2">
        <v-btn class="btn-red" @click="confirmDelete">確認</v-btn>
        <v-btn variant="outlined" class="" @click="showModal = false"
          >取消</v-btn
        >
      </div>
    </template>
  </XBaseModal>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

import { noticeList } from '@/utils/messages';

const router = useRouter();

const props = defineProps({
  showModal: Boolean,
});
const emit = defineEmits(['update:showModal', 'confirm']);

const showModal = ref(false);

watch(
  () => props.showModal,
  (newVal) => {
    showModal.value = newVal;
  }
);

watch(showModal, (newVal) => {
  emit('update:showModal', newVal);
});

const confirmDelete = () => {
  emit('confirm');
  showModal.value = false;
};
</script>

<style scoped lang="scss"></style>
