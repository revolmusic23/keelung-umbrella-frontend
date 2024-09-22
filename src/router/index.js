import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL || '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('@/views/Activity.vue'),
    meta: {
      title: '活動內容',
    },
  },
  {
    path: '/upload',
    name: 'UploadStepper',
    component: () => import('@/views/UploadStepper.vue'),
    meta: {
      title: '上傳圖片',
    },
  },
  {
    path: '/upload/complete',
    name: 'UploadComplete',
    component: () => import('@/views/UploadComplete.vue'),
    meta: {
      title: '上傳成功',
    },
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Gallery.vue'),
    meta: {
      title: '作品頁',
    },
  },
  {
    path: '/gallery/info',
    name: 'GalleryInfo',
    component: () => import('@/views/GalleryInfo.vue'),
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('@/views/Links.vue'),
    meta: {
      title: '友善連結',
    },
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
