<template>
  <v-btn
    icon="mdi-image"
    :size="buttonSize"
    @click="navigateToSubmissions"
    class="scroll-to-top-btn btn-blue"
  ></v-btn>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

const display = useDisplay();
const router = useRouter();

const navigateToSubmissions = () => {
  router.push({
    name: 'Submissions',
  });
};

const buttonSize = computed(() => {
  if (display.xs.value || display.sm.value) return 'default';
  else return 'large';
});
</script>

<style scoped></style>
