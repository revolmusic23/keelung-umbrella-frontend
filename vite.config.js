import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const BASE_URL = process.env.VITE_BASE_URL || '/';

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
