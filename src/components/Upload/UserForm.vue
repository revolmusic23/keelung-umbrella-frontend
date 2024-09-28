<template>
  <v-form ref="userFormRef">
    <div v-for="item in userFormItem" :key="item.id" class="mb-4">
      <h5 class="mb-2">
        {{ item.label }}
        <span v-if="item.required" style="color: red">*</span>
      </h5>

      <v-text-field
        variant="outlined"
        color="var(--primary-blue)"
        v-model="userFormData[item.id]"
        :rules="item.rules ? item.rules : []"
        :counter="item.counter"
        density="compact"
      ></v-text-field>
    </div>
  </v-form>

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
  </v-form>
</template>

<script setup>
import { ref, reactive, computed, watch, onUnmounted } from 'vue';
import {
  requiredRules,
  idNoRules,
  phoneRules,
  emailRules,
  imgDescriptionRules,
  imgUploadRules,
} from '@/utils/validate';

const userFormRef = ref(null);

const props = defineProps({
  userFormData: Object,
  imgFormData: Object,
  imgUrl: String,
});
const emit = defineEmits(['update:imgUrl']);

/*
 * For User Form
 */
const userFormData = props.userFormData;
const userFormItem = [
  { id: 'name', label: '姓名', required: true, rules: requiredRules() },
  {
    id: 'idNo',
    label: '身分證字號',
    required: true,
    counter: 10,
    rules: idNoRules(),
  },
  {
    id: 'phone',
    label: '手機號碼',
    required: true,
    counter: 10,
    rules: phoneRules(),
  },
  { id: 'email', label: 'E-mail', required: true, rules: emailRules() },
];

/*
 * For Image Form
 */
const MAX_IMG_SIZE = 50;
const MAX_DESCRIPTION = 50;
const imgFormRef = ref(null);

const imgFormData = props.imgFormData;
const imgUrl = ref(null);

watch(imgUrl, (newVal) => {
  emit('update:imgUrl', newVal);
});

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
    id: 'author',
    label: '作者',
    required: true,
    rules: requiredRules(),
  },
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

onUnmounted(() => {
  URL.revokeObjectURL(imgUrl.value);
});

const validate = async () => {
  const userFormValid = await userFormRef.value.validate();
  const imgFormValid = await imgFormRef.value.validate();
  return userFormValid.valid && imgFormValid.valid;
};

defineExpose({ validate });
</script>

<style lang="scss" scoped>
:deep(.v-input__details) {
  padding: 0 !important;
}
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
