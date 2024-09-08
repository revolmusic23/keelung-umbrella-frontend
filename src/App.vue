<template>
  <v-app>
    <Toolbar v-if="showToolbar" />

    <v-main>
      <v-container>
        <router-view></router-view>
        <ScrollToTopButton />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Toolbar from './components/Toolbar.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';

const route = useRoute();
const showToolbar = computed(() => !route.meta.hideToolbar);
</script>

<style scoped lang="scss">
* {
  --primary-orange: rgb(237, 93, 21);
  --primary-orange-hover: rgba(237, 93, 21, 0.3);
  --primary-blue: rgba(22, 73, 147);

  background-color: #eee;
}
</style>
