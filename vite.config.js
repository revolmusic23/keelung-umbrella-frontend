import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

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
