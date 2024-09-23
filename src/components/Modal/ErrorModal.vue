<template>
  <!-- TODO: showModal 用 computed 會出問題，做到一半 -->
  <v-dialog v-model="showModal" class="w-100 w-md-75" max-width="500">
    <v-card class="pa-2 rounded-lg">
      <v-card-title>發生錯誤</v-card-title>
      <v-card-text>
        {{ errorMessage }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="red" variant="elevated" @click="modelValue = false"
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
    default: '發生錯誤，請再試一次。',
  },
  showModal: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:showModal']);

const router = useRouter();
const showModal = ref(true);
console.log(props.showModal);
const modelValue = computed(() => ({
  get: () => {
    props.showModal;
    console.log(props.showModal);
  },
  set: (value) => emit('update:showModal', value),
}));
// console.log(showModal.value);
</script>

<style scoped lang="scss"></style>
