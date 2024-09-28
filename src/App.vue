<template>
  <v-app>
    <Toolbar v-if="showToolbar" />

    <v-main>
      <v-container>
        <router-view></router-view>
        <XErrorModal v-if="showErrorModal" />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import Toolbar from './components/Toolbar.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const showToolbar = computed(() => !route.meta.hideToolbar);
const showErrorModal = computed(() => store.state.showErrorModal);
</script>

<style lang="scss">
* {
  --primary-orange: rgb(237, 93, 21);
  --primary-orange-hover: rgba(237, 93, 21, 0.3);
  --primary-blue: rgba(22, 73, 147);
  --primary-water: rgb(0, 158, 220);
  --primary-green: rgb(84, 155, 53);
  --primary-yellow: rgb(253, 208, 0);
}

.v-main {
  background-color: #eee;
}
</style>
