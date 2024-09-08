import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const isDevelopment = process.env.NODE_ENV === 'development';
const BASE_URL = isDevelopment ? '/' : '/keelung-umbrella-frontend/';
console.log('Current BASE_URL:', BASE_URL);

export default defineConfig({
  base: '/keelung-umbrella-frontend/',
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
