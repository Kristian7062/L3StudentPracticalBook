import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'

import router from './router/index.js'

// Retain any existing global CSS imports your project needs.


createApp(App).use(router).mount('#app')

