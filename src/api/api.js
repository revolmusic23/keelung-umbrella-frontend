import axios from 'axios';
import store from '../store';

// const API_URL = '/api';
// const TOKEN_URL = '/oauth/token';

const isProduction = import.meta.env.PROD;

const API_URL = isProduction
  ? import.meta.env.VITE_API_URL || 'https://event-site.org/keelung/api'
  : '/api';

const TOKEN_URL = isProduction
  ? import.meta.env.VITE_TOKEN_URL ||
    'https://event-site.org/keelung/oauth/token'
  : '/oauth/token';

const CLIENT_ID = '1';
const CLIENT_SECRET = 'Zt6JQhpav1KBvSC3JN3PatmoQgrsmf73PgG7qxvu';

let accessToken = null;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

const getNewToken = async () => {
  const response = await axios.post(
    TOKEN_URL,
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'client_credentials',
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: false,
    }
  );
  accessToken = response.data.access_token;
  return accessToken;
};

const getValidToken = async () => {
  if (!accessToken) {
    return getNewToken();
  }
  return accessToken;
};

const setContentType = (config) => {
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else if (typeof config.data === 'object') {
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
};

api.interceptors.request.use(
  async (config) => {
    store.dispatch('setLoading', true);
    store.dispatch('setShowErrorModal', { value: false, errorMessage: '' });
    config.headers.Authorization = `Bearer ${await getValidToken()}`;
    config = setContentType(config);

    // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    // config.url = corsAnywhereUrl + config.url;

    return config;
  },
  (error) => {
    store.dispatch('setLoading', false);
    store.dispatch('setShowErrorModal', {
      value: true,
      errorMessage: error.response.data.message,
    });
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    store.dispatch('setLoading', false);
    store.dispatch('setShowErrorModal', { value: false, errorMessage: '' });
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      accessToken = null;
      const originalRequest = error.config;
      originalRequest.headers.Authorization = `Bearer ${await getNewToken()}`;
      return api(originalRequest);
    }
    store.dispatch('setLoading', false);
    store.dispatch('setShowErrorModal', {
      value: true,
      errorMessage: error.response.data.message,
    });
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default api;
