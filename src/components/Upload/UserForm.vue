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
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';
import {
  requiredRules,
  idNoRules,
  phoneRules,
  emailRules,
} from '@/utils/validate';

const userFormRef = ref(null);

const props = defineProps({
  userFormData: {
    type: Object,
  },
});
const emit = defineEmits(['submit']);

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

const validate = async () => {
  console.log('validate');
  const { valid } = await userFormRef.value.validate();
  return valid;
};

defineExpose({ validate });
</script>

<style lang="scss" scoped>
@import '@/assets/styles/buttons.scss';

:deep(.v-input__details) {
  padding: 0 !important;
}
</style>
