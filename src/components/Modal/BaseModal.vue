<template>
  <v-dialog v-model="showModal" class="w-100 w-md-75" max-width="700">
    <v-card>
      <v-card-title>
        <slot name="title"></slot>
      </v-card-title>
      <v-card-text>
        <slot name="text"></slot>
      </v-card-text>
      <v-card-actions>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  showModal: Boolean,
});
const emit = defineEmits(['update:showModal']);

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
</script>

<style scoped lang="scss"></style>
