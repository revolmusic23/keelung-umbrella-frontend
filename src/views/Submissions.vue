<template>
  <h1 class="page-title">個人提交作品</h1>

  <div class="text-center d-flex justify-center align-center ga-2 my-4">
    <v-text-field
      v-model="nid"
      label="請輸入身分證字號"
      density="compact"
      variant="outlined"
      hide-details
      max-width="600"
    ></v-text-field>
    <v-btn class="btn-orange" @click="getSubmissions">查詢</v-btn>
  </div>

  <div v-if="submissionsList.length > 0" class="page-info mb-4">
    <p>姓名：{{ userInfo.name }}</p>
    <p>手機號碼：{{ userInfo.phone }}</p>
    <p>電子郵件：{{ userInfo.email }}</p>
  </div>

  <p v-if="errorMessage">{{ errorMessage }}</p>

  <XLoadingCircle v-if="isLoading && !loadingDelete" />

  <GalleryGrid :cards="submissionsList">
    <template #actions="{ item }">
      <v-btn
        @click.stop="deleteImage(item.uuid)"
        :loading="loadingDelete"
        class="btn-red"
      >
        刪除
      </v-btn>
    </template>
  </GalleryGrid>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import GalleryGrid from '@/components/Grid/GalleryGrid.vue';
import services from '@/services/services';

const store = useStore();
const isLoading = computed(() => store.state.isLoading);
const loadingDelete = ref(false);

const showSubmissions = ref(false);

const nid = ref('');
const userInfo = ref({
  name: '',
  phone: '',
  email: '',
});
const submissionsList = ref([]);
const detaching_id = ref('');

const errorMessage = ref('');

const getSubmissions = async () => {
  errorMessage.value = '';
  submissionsList.value = [];

  const params = {
    nid: nid.value,
  };
  const [errMsg, data] = await services.getSubmissions(params);
  if (data) {
    setSubmissionsList(data);
    console.log(data);
  } else {
    errorMessage.value = errMsg;
  }
};

const setSubmissionsList = (data) => {
  submissionsList.value = data.items;
  userInfo.value = {
    name: data.name,
    phone: data.phone,
    email: data.email,
  };
  detaching_id.value = data.detaching_id;
};

const deleteImage = async (uuid) => {
  loadingDelete.value = true;
  try {
    const params = {
      detaching_id: detaching_id.value,
      image_uuid: uuid,
    };
    const response = await services.deleteImage(params);
  } catch (error) {
  } finally {
    loadingDelete.value = false;
    getSubmissions();
  }
};
</script>

<style></style>
