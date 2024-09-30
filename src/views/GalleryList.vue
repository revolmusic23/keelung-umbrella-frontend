<template>
  <v-infinite-scroll :onLoad="getGalleryList" color="orange">
    <XBaseGridLayout :cards="galleryList">
      <template #card="{ item }">
        <v-img
          @click="toggleModal.galleryInfo(item.uuid)"
          :src="item.images[0].framed_image_path"
          placeholder="載入中"
        ></v-img>
        <div class="mt-2 d-flex justify-center">
          <v-btn
            class="btn-blue"
            rounded
            @click="downloadImg(item.images[0].framed_image_path)"
            >下載收藏此作品</v-btn
          >
        </div>
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
import { downloadImg } from '@/utils/imgUtils';
import services from '@/services/services';
import GalleryInfoModal from '@/components/Modal/GalleryInfoModal.vue';

const router = useRouter();

const pagination = ref({
  current_page: 0,
  last_page: Infinity,
});
const PER_PAGE = 10;

const galleryList = ref([]);

const getGalleryList = async ({ done }) => {
  try {
    let tempList;
    [tempList, pagination.value] = await services.getGalleryList(
      pagination.value.current_page + 1,
      PER_PAGE
    );

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
