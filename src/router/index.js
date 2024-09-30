import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL || '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '關於傘人家族',
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
      title: '上傳作品',
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
    component: () => import('@/views/GalleryList.vue'),
    meta: {
      title: '參賽作品',
    },
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('@/views/Links.vue'),
    meta: {
      title: '相關連結',
    },
  },
  {
    path: '/submissions',
    name: 'Submissions',
    component: () => import('@/views/Submissions.vue'),
    meta: {
      title: '個人作品',
    },
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
