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
    title: '111年海洋保育創意攝影競賽【人氣票選】－海洋生物組',
    href: 'https://feversocial.com/ugc/6949',
  },
  {
    title: 'AGUA Design - Keelung City Wayfinding System Design',
    href: 'http://www.aguadesign.com.tw/design_show.php?designtype_id=&keywor=&Page=9',
  },
  {
    title:
      '小橘公仔收集一日遊！ 基隆城市指標「橘色傘人家族」萌娃照特搜 可愛小雲.小傘.大傘最新駐點處快追',
    href: 'https://udn.com/news/story/7205/8136149',
  },
];
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  align-items: center;
  letter-spacing: 1.4px;
}
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
