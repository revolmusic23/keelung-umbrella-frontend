<template>
  <XLoadingCircle v-if="isLoading" />
  <v-sheet
    v-else
    class="pa-8 mx-auto"
    elevation="4"
    max-width="500"
    rounded="lg"
    width="100%"
  >
    <XCardImage
      :imgSrc="galleryInfo.src"
      :description="galleryInfo.description"
    />
    <div class="gallary-info-paragraph">
      <h4>作者：{{ galleryInfo.author }}</h4>
      <h4>作品名稱：{{ galleryInfo.title }}</h4>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import services from '@/services/services';

const props = defineProps({
  uuid: String,
});

const route = useRoute();
const store = useStore();
const isLoading = computed(() => store.state.isLoading);

const galleryInfo = ref({});

onMounted(() => {
  getGalleryInfo();
});

const errorMessage = ref('');

const getGalleryInfo = async () => {
  try {
    [errorMessage.value, galleryInfo.value] = await services.getGalleryInfo(
      props.uuid
    );
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.gallary-info-paragraph {
  line-height: 2;
}
</style>
