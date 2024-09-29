<template>
  <v-dialog v-model="showModal" class="w-100 w-md-75" max-width="700">
    <slot>
      <v-card>
        <v-card-title v-if="$slots.title">
          <slot name="title"></slot>
        </v-card-title>
        <v-card-text v-if="$slots.text">
          <slot name="text"></slot>
        </v-card-text>
        <v-card-actions v-if="$slots.actions">
          <slot name="actions"></slot>
        </v-card-actions>
      </v-card>
    </slot>
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
