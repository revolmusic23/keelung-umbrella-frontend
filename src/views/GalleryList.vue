<template>
  <v-infinite-scroll :onLoad="getGalleryList" color="orange">
    <XBaseGridLayout :cards="galleryList">
      <template #card="{ item }">
        <XCardImage
          @click="toggleModal.galleryInfo(item.uuid)"
          :imgSrc="item.images[0].image_path"
          :description="item.description"
        />
      </template>
    </XBaseGridLayout>
  </v-infinite-scroll>

  <GalleryInfoModal
    v-model:showModal="showModal.galleryInfo"
    :uuid="selectedUuid"
  />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import services from '@/services/services';
import GalleryInfoModal from '@/components/Modal/GalleryInfoModal.vue';

const router = useRouter();

const pagination = ref({
  current_page: 0,
  last_page: Infinity,
});

const galleryList = ref([]);

const getGalleryList = async ({ done }) => {
  try {
    let tempList;
    [tempList, pagination.value] = await services.getGalleryList();

    galleryList.value.push(...tempList);
    console.log('galleryList:', galleryList.value);
    console.log('pagination:', pagination.value);
    if (pagination.value.current_page < pagination.value.last_page) {
      done('ok');
    } else {
      done('empty');
    }
  } catch (error) {
    done('empty');
  }
};

// const navigateToGalleryInfo = (uuid) => {
//   router.push(`/gallery/${uuid}`);
// };

const selectedUuid = ref('');

const showModal = reactive({
  galleryInfo: false,
});

const toggleModal = {
  galleryInfo: (uuid) => {
    selectedUuid.value = uuid;
    showModal.galleryInfo = true;
    console.log(selectedUuid.value);
  },
};
</script>

<style></style>
