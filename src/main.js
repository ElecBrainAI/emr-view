import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';

createApp(App).use(router).mount('#app')