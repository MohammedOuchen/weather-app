import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import './assets/tailwind.css';

const messages = {
  en: {
    selectCity: 'Select a city:',
    temperature: 'Temperature',
    humidity: 'Humidity',
    condition: 'Condition',
    forecast: '7-day Forecast',
    loading: 'Loading...',
    heroTitle: 'Check the Weather Forecast',
    heroSubtitle: 'Get the latest weather updates and forecasts for your city',
  },
  fr: {
    selectCity: 'Sélectionnez une ville:',
    temperature: 'Température',
    humidity: 'Humidité',
    condition: 'Condition',
    forecast: 'Prévisions sur 7 jours',
    loading: 'Chargement...',
    heroTitle: 'Vérifiez les prévisions météorologiques',
    heroSubtitle: 'Obtenez les dernières mises à jour météo et les prévisions pour votre ville',
  },
}

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || 'fr',
  messages,
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
