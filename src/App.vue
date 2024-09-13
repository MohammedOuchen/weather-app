<template>
  <div class="app-container">
    <div class="hero-section">
      <h1 class="text-5xl font-extrabold text-white mb-4 text-center">{{ $t('heroTitle') }}</h1>
      <p class="text-lg text-white text-center mb-4">{{ $t('heroSubtitle') }}</p>
    </div>

    <div class="mt-10">
      <WeatherWidget />
    </div>
  </div>
</template>

<script setup>
import WeatherWidget from './components/WeatherWidget.vue';
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: url('./assets/meteo.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-section {
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mt-10 {
  /* background: rgba(255, 255, 255, 0.8); */
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
