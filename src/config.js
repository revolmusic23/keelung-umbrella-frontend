const isDevelopment = process.env.NODE_ENV === 'development';

export const BASE_URL = isDevelopment ? '/' : '/keelung-umbrella-frontend/';
