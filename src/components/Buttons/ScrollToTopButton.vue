<template>
  <v-btn
    v-show="showButton"
    icon="mdi-arrow-up"
    :size="buttonSize"
    @click="scrollToTop"
    class="scroll-to-top-btn btn-orange"
  ></v-btn>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const buttonSize = computed(() => {
  if (display.xs.value || display.sm.value) return 'default';
  else return 'large';
});
</script>

<style scoped></style>
