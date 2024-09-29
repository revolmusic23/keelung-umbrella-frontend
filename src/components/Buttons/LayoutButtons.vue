<template>
  <div class="layout-buttons">
    <component
      v-for="button in activeButtons"
      :key="button.name"
      :is="buttonComponents[button.component]"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import ScrollToTopButton from '@/components/Buttons/ScrollToTopButton.vue';
import GoToSubmissionsButton from '@/components/Buttons/GoToSubmissionsButton.vue';

const router = useRouter();
const route = useRoute();

const scrollBtnRoutes = ['Home', 'Activity', 'Gallery'];
const submissionsBtnRoutes = ['UploadStepper', 'Gallery', 'GalleryInfo'];

const activeButtons = computed(() => {
  const showButtons = [];
  const curRouteName = route.name;
  if (scrollBtnRoutes.includes(curRouteName)) {
    showButtons.push({ name: 'scrollToTop', component: 'scrollToTop' });
  }
  if (submissionsBtnRoutes.includes(curRouteName)) {
    showButtons.push({ name: 'gotoSubmissions', component: 'gotoSubmissions' });
  }
  return showButtons;
});

const buttonComponents = {
  scrollToTop: ScrollToTopButton,
  gotoSubmissions: GoToSubmissionsButton,
};
</script>

<style scoped lang="scss">
.layout-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  // align-items: flex-end;
  gap: 10px;
  z-index: 1000;
}
</style>
