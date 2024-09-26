import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: mode === 'production' ? env.VITE_BASE_URL : '/',
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
    build: {
      outDir: 'UmbrellaMan123',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            'cors-anywhere': ['cors-anywhere'],
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://event-site.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/keelung/api'),
        },
        '/oauth': {
          target: 'https://event-site.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/oauth/, '/keelung/oauth'),
        },
        '/storage': {
          target: 'https://event-site.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/storage/, '/keelung/storage'),
        },
      },
    },
    define: {
      'process.env': env,
    },
  };
});
