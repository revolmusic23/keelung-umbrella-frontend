export const REQUIRED_FIELD_MESSAGE = '此欄位不得為空';

export const requiredLengthText = (text, num) => {
  return `${text}必須是 ${num} 個字元`;
};

export const invalidFormat = (text) => {
  return `${text}格式不正確`;
};

export const overMaxLength = (num) => {
  return `此欄位不得超過 ${num} 個字`;
};
