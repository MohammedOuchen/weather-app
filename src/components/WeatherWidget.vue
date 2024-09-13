<template>
  <div class="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
    <label for="city" class="block text-gray-700 font-semibold text-lg">{{ $t('selectCity') }}</label>
    <select v-model="selectedCity" @change="getWeatherData" class="mt-2 block w-full p-2 border rounded-lg bg-gray-100">
      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
    </select>

    <div v-if="loading" class="mt-4 text-center text-blue-600 font-bold">{{ $t('loading') }}</div>

    <div v-if="weatherData" class="mt-6 text-center">
      <h2 class="text-2xl font-bold text-gray-800">{{ weatherData?.location?.name }}</h2>
      <p class="text-gray-600">{{ $t('temperature') }}: <span class="font-bold text-lg">{{ weatherData?.current?.temp_c }}°C</span></p>
      <p class="text-gray-600">{{ $t('humidity') }}: <span class="font-bold">{{ weatherData?.current?.humidity }}%</span></p>
      <p class="text-gray-600">{{ $t('condition') }}: <span class="font-bold">{{ weatherData?.current?.condition?.text }}</span></p>
      <img :src="weatherData?.current?.condition?.icon" alt="Weather condition" class="mx-auto mt-4" />
    </div>

    <div v-if="forecastData" class="mt-6">
      <h3 class="text-xl font-bold text-gray-800 text-center">{{ $t('forecast') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div v-for="day in forecastData?.forecast?.forecastday" :key="day.date" class="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h4 class="font-semibold text-gray-700">{{ day.date }}</h4>
          <p class="text-gray-600">{{ $t('temperature') }}: <span class="font-bold">{{ day.day.avgtemp_c }}°C</span></p>
          <p class="text-gray-600">{{ day.day.condition.text }}</p>
          <img :src="day?.day?.condition?.icon" alt="weather condition" class="mx-auto mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';

const cities = ['Paris', 'London', 'New York', 'Tokyo'];
const selectedCity = ref('Paris');
const weatherData = ref(null);
const forecastData = ref(null);
const loading = ref(false);

async function getWeatherData() {
  loading.value = true;
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=47a51ac91d6f491c953222711230507&q=${selectedCity.value}&aqi=no`
    );
    weatherData.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

async function getForecastData() {
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=47a51ac91d6f491c953222711230507&q=${selectedCity.value}&days=7`
    );
    forecastData.value = data;
  } catch (error) {
    console.error(error);
  }
}


watch(selectedCity, async () => {
  await getWeatherData();
  await getForecastData();
});

onMounted(() => {
  getWeatherData();
  getForecastData();
});
</script>

<style scoped>
</style>
