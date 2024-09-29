<template>
  <h1 class="page-title">個人提交作品</h1>

  <div class="text-center d-flex justify-center align-center ga-2 my-4">
    <v-text-field
      v-model="phone"
      label="請輸入手機號碼"
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

  <XBaseGridLayout :cards="submissionsList">
    <template #card="{ item }">
      <XCardImage
        :imgSrc="item.images[0].image_path"
        :description="item.description"
      >
        <template #actions>
          <v-btn
            @click="toggleModal.delete(item.uuid)"
            :loading="loadingDelete && item.uuid === delete_image_uuid"
            class="btn-red"
          >
            刪除
          </v-btn>
        </template>
      </XCardImage>
    </template>
  </XBaseGridLayout>

  <DeleteSubmissionModal
    v-model:showModal="showModal.delete"
    @confirm="deleteImage"
  />
</template>

<script setup>
import { onMounted, ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import services from '@/services/services';
import DeleteSubmissionModal from '@/components/Modal/DeleteSubmissionModal.vue';

const store = useStore();
const isLoading = computed(() => store.state.isLoading);
const loadingDelete = ref(false);

const showSubmissions = ref(false);

const phone = ref('');
const userInfo = ref({
  name: '',
  phone: '',
  email: '',
});
const submissionsList = ref([]);
const detaching_id = ref('');

const errorMessage = ref('');

const showItem = (item) => {
  console.log(item);
};

const getSubmissions = async () => {
  errorMessage.value = '';
  submissionsList.value = [];

  const params = {
    phone: phone.value,
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
  console.log('submissionsList:', submissionsList.value);
  userInfo.value = {
    name: data.name,
    phone: data.phone,
    email: data.email,
  };
  detaching_id.value = data.detaching_id;
};

const deleteImage = async (uuid) => {
  loadingDelete.value = true;
  const params = {
    detaching_id: detaching_id.value,
    image_uuid: delete_image_uuid.value,
  };
  const [err, response] = await services.deleteImage(params);
  if (response) {
    console.log(response);
    getSubmissions();
  }
  loadingDelete.value = false;
};

const delete_image_uuid = ref('');

const showModal = reactive({
  delete: false,
});

const toggleModal = {
  delete: (uuid) => {
    showModal.delete = true;
    delete_image_uuid.value = uuid;
  },
};
</script>

<style></style>
