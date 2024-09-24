import validate from 'validate.js';
import { computed } from 'vue';
import {
  REQUIRED_FIELD_MESSAGE,
  requiredLengthText,
  invalidFormat,
  overMaxLength,
} from './messages';

const IDNO = '身分證字號';
const PHONENUM = '手機號碼';
const EMAIL = '電子郵件地址';

export const requiredRules = () => [(v) => !!v || REQUIRED_FIELD_MESSAGE];

export const idNoRules = () => [
  (v) => !!v || REQUIRED_FIELD_MESSAGE,
  (v) => v.length === 10 || requiredLengthText(IDNO, 10),
  (v) => /^[A-Z][12]\d{8}$/.test(v) || invalidFormat(IDNO),
];

export const phoneRules = () => [
  (v) => !!v || REQUIRED_FIELD_MESSAGE,
  (v) => v.length === 10 || requiredLengthText(PHONENUM, 10),
  (v) => /^09\d{8}$/.test(v) || `${PHONENUM}必須為 09 開頭的 10 位數字`,
];

export const emailRules = () => [
  (v) => !!v || REQUIRED_FIELD_MESSAGE,
  (v) => !v || v.length <= 255 || `${EMAIL}不能超過 255 個字元`,
  (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || `請輸入有效的${EMAIL}`,
  (v) =>
    !v ||
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) ||
    `${EMAIL}格式不正確`,
];

export const imgDescriptionRules = (maxLength) => [
  (v) => !!v || REQUIRED_FIELD_MESSAGE,
  (v) => v.length < maxLength || overMaxLength(maxLength),
];

export const imgUploadRules = (MAX_IMG_SIZE) => [
  (value) => {
    return value.length > 0 || '請選擇圖片';
  },
  (value) => {
    return (
      !value ||
      value[0].size <= MAX_IMG_SIZE * 1024 * 1024 ||
      `圖片大小不能超過 ${MAX_IMG_SIZE} MB`
    );
  },
];
