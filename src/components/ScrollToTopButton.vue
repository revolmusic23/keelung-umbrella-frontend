<template>
  <v-btn
    v-show="showButton"
    icon="mdi-arrow-up"
    size="large"
    @click="scrollToTop"
    class="scroll-to-top-btn btn-orange"
  ></v-btn>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>

<style scoped>
@import '@/assets/styles/buttons.scss';
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}
</style>
