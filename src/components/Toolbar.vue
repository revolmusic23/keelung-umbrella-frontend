<template>
  <v-app-bar fixed class="px-md-12" :elevation="2" color="white">
    <v-img
      src="images/keelong-city-logo.png"
      height="70%"
      max-width="240"
      class="ml-2 cursor-pointer"
      @click="router.push({ name: 'Home' })"
    ></v-img>
    <!-- <v-btn icon variant="text" @click="router.push({ name: 'Home' })">
      <v-icon icon>mdi-home</v-icon>
    </v-btn> -->
    <v-spacer></v-spacer>
    <v-btn
      v-for="item in menuItems"
      :key="item.title"
      :to="{ name: item.routeName }"
      text
      class="toolbar-btn d-none d-sm-flex h-100"
      :class="{ 'active-btn': $route.path.startsWith(item.routePath) }"
    >
      {{ item.title }}
    </v-btn>
    <v-app-bar-nav-icon
      @click="showDrawer = !showDrawer"
      class="d-flex d-sm-none"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="showDrawer" temporary>
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="{ name: item.routeName }"
        link
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const HOME_TITLE = '基隆市政府傘人家族合照掃碼投稿活動';

const router = useRouter();

const showDrawer = ref(false);

const menu = ['UploadStepper', 'Gallery', 'Links'];
/**
 * 將主選單轉為 vuetify 要求格式
 * @param {string} item
 * @returns {{title: string, routeName: string, routePath: string}}
 */
const menuItems = computed(() => {
  return menu.map((item) => {
    const route = router.getRoutes().find((route) => route.name === item);
    return {
      title: route?.meta?.title || item,
      routeName: item,
      routePath: route.path,
    };
  });
});
</script>

<style lang="scss" scoped>
.toolbar-btn.active-btn {
  background-color: $primary-orange;
  color: white;
}
.toolbar-btn:not(.active-btn):hover {
  background-color: var(--primary-orange-hover);
  // background-color: rgba(var(--primary-orange), 0.5);
}
</style>
