<template>
  <!-- <v-form ref="imgFormRef" @submit.prevent="submitForm"> -->
  <v-form ref="imgFormRef">
    <v-card class="border mb-4" min-height="200">
      <v-img v-if="imgFormData.img" :src="imgUrl"></v-img>
      <v-card-text v-else>
        <v-icon size="50" class="mb-2">mdi-image</v-icon>
        <p>
          支援格式有 png/jpg 檔，<br />
          最大限制為 {{ MAX_IMG_SIZE }} MB。
        </p>
      </v-card-text>
    </v-card>
    <v-file-input
      label="上傳圖片"
      accept="image/*"
      prepend-icon=""
      append-inner-icon="mdi-camera"
      v-model="imgFormData.img"
      variant="solo-filled"
      density="compact"
      :rules="imgUploadRules(MAX_IMG_SIZE)"
      class="mb-4"
    >
    </v-file-input>

    <div v-for="item in imgFormItem" :key="item.id" class="mb-4">
      <h5 class="mb-2">
        {{ item.label }}
        <span v-if="item.required" style="color: red">*</span>
      </h5>

      <component
        :is="item.id === 'description' ? 'v-textarea' : 'v-text-field'"
        variant="outlined"
        color="var(--primary-blue)"
        v-model="imgFormData[item.id]"
        :rules="item.rules || []"
        :counter="item.counter"
        density="compact"
      ></component>
    </div>

    <!-- <div class="button-container">
      <v-btn @click="emit('prev-step')" variant="tonal">上一步</v-btn>
      <v-btn type="submit" class="btn-orange" :loading="loadingSubmit"
        >送出</v-btn
      >
    </div> -->
  </v-form>
</template>

<script setup>
import { ref, reactive, watch, onUnmounted } from 'vue';
import {
  requiredRules,
  imgDescriptionRules,
  imgUploadRules,
} from '@/utils/validate';

const MAX_IMG_SIZE = 2;
const MAX_DESCRIPTION = 100;
const imgFormRef = ref(null);

const props = defineProps({
  imgFormData: {
    type: Object,
  },
});

const emit = defineEmits(['prev-step', 'submit']);

const imgFormData = props.imgFormData;
const imgUrl = ref(null);

watch(
  () => imgFormData.img,
  (newVal) => {
    console.log('Image file:', newVal);
    if (newVal) {
      imgUrl.value = URL.createObjectURL(newVal);
      console.log('Image url:', imgUrl.value);
    }
  }
);

const imgFormItem = [
  {
    id: 'title',
    label: '圖片名稱',
    required: true,
    rules: requiredRules(),
  },
  {
    id: 'description',
    label: `圖片敘述（最多 ${MAX_DESCRIPTION} 字）`,
    required: true,
    counter: MAX_DESCRIPTION,
    rules: imgDescriptionRules(MAX_DESCRIPTION),
  },
];

const loadingSubmit = ref(false);

const validate = async () => {
  const { valid } = await imgFormRef.value.validate();
  return valid;
};

// const submitForm = async () => {
//   try {
//     loadingSubmit.value = true;
//     const { valid } = await imgFormRef.value.validate();
//     if (valid) {
//       emit('submit');
//     }
//     emit('submit');
//   } catch (error) {
//   } finally {
//     loadingSubmit.value = false;
//   }
// };

onUnmounted(() => {
  URL.revokeObjectURL(imgUrl.value);
});

defineExpose({ validate });
</script>

<style lang="scss" scoped>
@import '@/assets/styles/buttons.scss';

.v-card {
  @include flex-center;
}
.v-card-text {
  @include flex-center(column);
}
.v-card-text p {
  text-align: center;
}
:deep(.v-input__details) {
  padding: 0 !important;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
