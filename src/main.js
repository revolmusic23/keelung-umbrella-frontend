import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

console.log('Vue App - Vite Mode:', import.meta.env.MODE);
console.log('Vue App - Is Production?', import.meta.env.PROD);
console.log('Vue App - Is Development?', import.meta.env.DEV);
console.log('Vue App - Base URL:', import.meta.env.BASE_URL);

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);

app.mount('#app');
