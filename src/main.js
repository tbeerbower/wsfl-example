import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Some components are pre-wired for i18n.
 * 'en', 'es' and 'fr' are available at the moment.
 */
import './assets/main.css'
createApp(App).use(router).mount('#app')
