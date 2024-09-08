import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  // const BASE_URL = mode === 'production' ? '/keelung-umbrella-frontend/' : '/';
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_URL || '/keelung-umbrella-frontend/';

  return {
    base: env.VITE_BASE_URL || '/keelung-umbrella-frontend/',
    plugins: [
      vue(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html
            .replace(
              /<script type="module" src="\/src\/main.js"><\/script>/,
              `<script type="module" src="${base}src/main.js"></script>`
            )
            .replace(
              /href="\/images\/sm-umbrella.png"/,
              `href="${base}images/sm-umbrella.png"`
            );
        },
      },
    ],
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
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  };
});
