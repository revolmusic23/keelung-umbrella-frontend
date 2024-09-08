import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const isDevelopment = process.env.NODE_ENV === 'development';
const BASE_URL = isDevelopment ? '/' : '/keelung-umbrella-frontend/';

export default defineConfig({
  base: BASE_URL,
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/main.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
