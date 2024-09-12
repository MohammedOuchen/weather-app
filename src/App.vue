<template>
  <div class="app-container">
    <div class="hero-section">
      <h1 class="text-5xl font-extrabold text-white mb-4 text-center">Check the Weather Forecast</h1>
      <p class="text-lg text-white text-center mb-4">Get the latest weather updates and forecasts for your city</p>
    </div>

    <div class="mt-10">
      <WeatherWidget />
    </div>
  </div>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';

export default {
  name: 'App',
  components: {
    WeatherWidget,
  },
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: url('./assets/weather_bg.webp') no-repeat center center;
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
  background: rgba(255, 255, 255, 0.8); /* Optional transparency for better readability */
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
