<template>
  <v-dialog
    v-model="showModal"
    class="w-100 w-md-75"
    :max-width="pictureRatio === 1 ? '750' : pictureRatio < 1 ? '600' : '1000'"
    :opacity="0.85"
  >
    <v-card class="pa-4 rounded-lg" color="transparent" elevation="0">
      <XLoadingCircle v-if="isLoading" />
      <div class="mb-4">
        <v-img :src="galleryInfo.src" class="photo-shadow"></v-img>
      </div>

      <div class="gallary-info-paragraph text-white">
        <div class="work-description-title">
          <h6>作品敘述</h6>
          <div class="line"></div>
        </div>
        <h3 class="mb-2">{{ galleryInfo.description }}</h3>
        <div class="work-number">
          作品編號：#{{ galleryInfo.number }}</div>
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
const pictureRatio = ref(1);

const getGalleryInfo = async () => {
  console.log('props.uuid:', props.uuid);
  [errorMessage.value, galleryInfo.value] = await services.getGalleryInfo(
    props.uuid
  );
  console.log(galleryInfo.value);

  const image = new Image();
  image.src = galleryInfo.value.src;

  image.onload = () => {
    pictureRatio.value = image.width / image.height;
  };
};
</script>

<style scoped lang="scss">
.work-description-title {
  h6 {
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 5px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.5;
    margin-bottom: 4px;
  }
}
.work-number {
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 2px 10px;
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 4px;
}
.photo-shadow {
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);
}
</style>
