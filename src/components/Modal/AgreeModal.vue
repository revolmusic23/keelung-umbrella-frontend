<template>
  <XBaseModal v-model="showModal">
    <template #title>
      <div class="ml-4 mt-2">注意事項</div>
    </template>
    <template #text>
      <ol class="d-flex flex-column text-start pl-4 pl-md-6 rounded-lg">
        <li v-for="(list, idx) in noticeList" :key="idx" class="mb-4">
          {{ list }}
        </li>
      </ol>
      <v-checkbox
        v-model="agreeValue"
        label="我已詳閱並同意以上注意事項"
        class="ml-n2"
        color="var(--primary-orange)"
        hide-details
      ></v-checkbox>
    </template>
    <template #actions>
      <v-btn
        class="btn-orange mb-2 mr-2"
        :disabled="!agreeValue"
        @click="agreeNotice"
        >送出</v-btn
      >
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
const emit = defineEmits(['update:showModal', 'agree-notice']);

const showModal = ref(false);

const agreeValue = ref(false);

const agreeNotice = () => {
  showModal.value = false;
  emit('agree-notice');
};

watch(
  () => props.showModal,
  (newVal) => {
    showModal.value = newVal;
  }
);

watch(showModal, (newVal) => {
  emit('update:showModal', newVal);
});
</script>

<style scoped lang="scss"></style>
