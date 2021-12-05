<template>
  <div style="display: flex; flex-direction: column">
    <ParkingLot :cars="cars" />
    <ParkingLot :cars="cars2" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ParkingLot from "./components/ParkingLot.vue";
import { ICar } from "./interfaces/Car";

const cars: ICar[] = reactive([
  { color: "#1b2e99", model: "BMW" },
  { color: "#1bbe29", model: "BMW" },
  { color: "#1bce89", model: "BMW" },
  { color: "#000", model: "BMW" },
  { color: "#ccc", model: "BMW" },
  { color: "#999", model: "BMW" },
]);

const cars2: ICar[] = reactive([
  { color: "#d94518", model: "BMW" },
  { color: "#0c9ba6", model: "BMW" },
  { color: "#dbdb0d", model: "BMW" },
]);

const generateColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const models = [
  "BMW",
  "Skoda",
  "Ferrari",
  "Porsche",
  "Lada",
  "Ford",
  "Honda",
  "Fiat",
  "Volvo",
  "Mercedes",
];

const pushRandomCar = () =>
  cars.push({
    color: generateColor(),
    model: models[~~[Math.random() * models.length]],
  });

onMounted(() => {
  setInterval(pushRandomCar, 10000)
  });
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  background-color: #7a7a7a;
  height: 100vh;
  color: #000;
}
</style>
