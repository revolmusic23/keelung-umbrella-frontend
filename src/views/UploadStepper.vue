<template>
  <v-container class="pa-0 mt-sm-4" max-width="500">
    <v-stepper :model-value="curStep">
      <v-stepper-header>
        <template v-for="step in ALLSTEPS" :key="step.idx">
          <v-stepper-item
            :title="step.title"
            :value="step.idx"
          ></v-stepper-item>
          <v-divider v-if="step.idx < totalStep || totalStep < 3"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item :value="ALLSTEPS['user'].idx">
          <UserForm
            ref="userFormRef"
            :userFormData="userFormData"
            @submit="gotoNextStep"
          />
          <v-btn class="mt-2 btn-orange" block @click="submitUser">
            下一步
          </v-btn>
        </v-stepper-window-item>
        <v-stepper-window-item :value="ALLSTEPS['image'].idx">
          <UploadImage
            ref="imgFormRef"
            :imgFormData="imgFormData"
            v-model:imgUrl="imgUrl"
            @submit="submitAll"
          />
          <div class="button-container">
            <v-btn @click="gotoPrevStep" variant="tonal">上一步</v-btn>
            <v-btn class="btn-orange" @click="submitImg">下一步</v-btn>
          </div>
        </v-stepper-window-item>
        <v-stepper-window-item :value="ALLSTEPS['polaroid'].idx">
          <PolaroidPreview :imgFormData="imgFormData" :imgUrl="imgUrl" />
          <div class="button-container">
            <v-btn @click="gotoPrevStep" variant="tonal">上一步</v-btn>
            <v-btn
              class="btn-orange"
              @click="toggleModal.agree"
              :loading="loadingSubmit"
              >送出</v-btn
            >
          </div>
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>

    <AgreeModal v-model:showModal="showModal.agree" @agree-notice="submitAll" />
    <XErrorModal
      v-model:showModal="showModal.error"
      :errorMessage="errorMessage"
    />
  </v-container>
</template>

<script setup>
import { reactive, ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import services from '@/services/services';
import UserForm from '@/components/Upload/UserForm.vue';
import UploadImage from '@/components/Upload/UploadImage.vue';
import PolaroidPreview from '@/components/Upload/PolaroidPreview.vue';
import AgreeModal from '@/components/Modal/AgreeModal.vue';

const router = useRouter();

const ALLSTEPS = {
  user: { idx: 1, title: '基本資料填寫' },
  image: { idx: 2, title: '圖片上傳' },
  polaroid: { idx: 3, title: '生成拍立得' },
};
const curStep = ref(1);
const totalStep = Object.keys(ALLSTEPS).length;
const isLastStep = computed(() => curStep.value >= totalStep);

const userFormData = reactive({});
const imgFormData = reactive({});
const imgUrl = ref('');

const userFormRef = ref(null);
const imgFormRef = ref(null);
const loadingSubmit = ref(false);

onMounted(() => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
    userFormData.name = userInfo.name;
    userFormData.phone = userInfo.phone;
    userFormData.email = userInfo.email;
  }
});

const gotoPrevStep = () => {
  curStep.value--;
};
const gotoNextStep = () => {
  curStep.value++;
};

const submitUser = async () => {
  const valid = await userFormRef.value.validate();
  if (valid) {
    storeUserInfo();
    curStep.value++;
  }
};

const storeUserInfo = () => {
  let userInfo = {
    name: userFormData.name,
    phone: userFormData.phone,
    email: userFormData.email,
  };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

const submitImg = async () => {
  const valid = await imgFormRef.value.validate();
  if (valid) {
    curStep.value++;
  }
};

const submitAll = async () => {
  loadingSubmit.value = true;
  const [errorMsg, response] = await services.postImg(
    userFormData,
    imgFormData
  );

  if (response) {
    router.push({
      name: 'UploadComplete',
    });
  } else {
    errorMessage.value = errorMsg;
    showModal.error = true;
  }
  loadingSubmit.value = false;
};

const errorMessage = ref('');
const showModal = reactive({
  agree: false,
  error: false,
});

const toggleModal = {
  agree: () => {
    showModal.agree = true;
  },
};
</script>

<style scoped>
label,
input {
  display: block;
}
input {
  border: 1px solid #aaa;
  border-radius: 4px;
  width: 100%;
  height: 40px;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
