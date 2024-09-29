<template>
  <v-dialog
    v-model="showModal"
    class="w-100 w-md-75"
    max-width="500"
    :opacity="0.85"
  >
    <v-card class="pa-4 rounded-lg" color="transparent" elevation="0">
      <XLoadingCircle v-if="isLoading" />
      <div class="mb-4">
        <v-img :src="galleryInfo.src" class=""></v-img>
      </div>

      <div class="gallary-info-paragraph text-white">
        <h4 class="mb-2">{{ galleryInfo.description }}</h4>
        <div class="text-caption">#{{ galleryInfo.number }}</div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import services from '@/services/services';
import { triggerDomToImage } from '@/utils/imgUtils';

const route = useRoute();
const router = useRouter();
const store = useStore();

const isLoading = computed(() => store.state.isLoading);

const props = defineProps({
  showModal: Boolean,
  uuid: String,
});

const emit = defineEmits(['update:showModal', 'confirm']);

const showModal = ref(false);

watch(
  () => props.showModal,
  (newVal) => {
    showModal.value = newVal;
  }
);

watch(showModal, (newVal) => {
  emit('update:showModal', newVal);
  if (newVal) {
    getGalleryInfo();
  } else {
    galleryInfo.value = {};
  }
});

const galleryInfo = ref({});
const errorMessage = ref('');

const getGalleryInfo = async () => {
  console.log('props.uuid:', props.uuid);
  [errorMessage.value, galleryInfo.value] = await services.getGalleryInfo(
    props.uuid
  );
  console.log(galleryInfo.value);
};
</script>

<style scoped lang="scss"></style>
