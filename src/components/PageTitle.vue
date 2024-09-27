<template>
  <h4 class="page-title mt-2">
    <v-icon class="" color="var(--primary-orange)">mdi-square-medium</v-icon>
    {{ title }}
  </h4>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.page-title {
  display: flex;
  align-items: center;
  letter-spacing: 1.4px;
}
</style>
