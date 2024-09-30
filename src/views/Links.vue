<template>
  <v-sheet class="mx-auto pa-4 rounded-lg border" elevation="4" max-width="500">
    <PageTitle :title="$route.meta.title" class="mb-4" />
    <div v-for="(link, idx) in links" :key="idx">
      <div class="links-container mb-2">
        <v-icon color="#666" size="18">mdi-link-variant</v-icon>
        <a :href="link.href" target="_blank">
          {{ link.title }}
        </a>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue';

const links = [
  {
    title: '基隆市文化觀光局',
    href: 'https://www.klccab.gov.tw/',
  },
  {
    title: '基隆市表演藝術',
    href: 'https://klneartsnew.klccab.gov.tw/',
  },
  {
    title: '基隆市視覺藝術',
    href: 'https://www.facebook.com/klvisualart/?locale=zh_TW',
  },
  {
    title: '基隆旅遊網',
    href: 'https://tour.klcg.gov.tw/zh-hant/',
  },
  {
    title: '魅力基隆',
    href: 'https://www.facebook.com/klcgamore?locale=zh_TW',
  },
  {
    title: '我們都是基隆人',
    href: 'https://www.facebook.com/groups/196498683754480/',
  },
  {
    title: '基隆海嗨',
    href: 'https://www.facebook.com/keelunghihi',
  },
  {
    title: '伊米塔IG',
    href: 'https://www.instagram.com/traveler_evita/',
  },
];
</script>

<style lang="scss" scoped>
.links-container {
  display: flex;
  align-items: center;
  gap: 6px;
}
.links-container a {
  text-decoration: none;
  color: #666;
}
.links-container a:hover {
  text-decoration: underline;
}
</style>
