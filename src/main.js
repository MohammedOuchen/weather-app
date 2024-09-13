import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import './assets/tailwind.css';
import en from './locales/en'
import fr from './locales/fr'

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || 'fr',
  messages: {
    en,
    fr,
  },
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
