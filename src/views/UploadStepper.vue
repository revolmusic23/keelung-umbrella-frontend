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
              @click="submitAll"
              :loading="loadingSubmit"
              >送出</v-btn
            >
          </div>
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>
    <!-- <ErrorModal v-model:showModal="showErrorModal" /> -->
  </v-container>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import services from '@/services/services';
import UserForm from '@/components/Upload/UserForm.vue';
import UploadImage from '@/components/Upload/UploadImage.vue';
import PolaroidPreview from '@/components/Upload/PolaroidPreview.vue';
// import ErrorModal from '@/components/Modal/ErrorModal.vue';

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
// const showErrorModal = ref(true);

const gotoPrevStep = () => {
  curStep.value--;
};
const gotoNextStep = () => {
  curStep.value++;
};

const submitUser = async () => {
  try {
    const valid = await userFormRef.value.validate();
    if (valid) {
      curStep.value++;
      // TODO: store user info in localStorage?
    }
  } catch (error) {
    console.log(error);
  }
};

const submitImg = async () => {
  try {
    const valid = await imgFormRef.value.validate();
    if (valid) {
      curStep.value++;
    }
  } catch (error) {}
};

const submitAll = async () => {
  try {
    loadingSubmit.value = true;
    const response = await services.postImg(userFormData, imgFormData);
    console.log(response);
    if (response) {
      router.push({
        name: 'UploadComplete',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loadingSubmit.value = false;
  }
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
