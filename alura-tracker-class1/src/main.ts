import { createApp } from 'vue'
import App from './App.vue'

import 'fontawesome-free/css/all.min.css';
import roteador from './roteador';

createApp(App)
  .use(roteador)
  .mount('#app')
