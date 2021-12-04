<template>
  <div style="display: flex; flex-direction: column">
    <ParkingLot :cars="cars" />
    <ParkingLot :cars="cars2" />
  </div>
</template>

<script setup lang="ts">
import ParkingLot from "./components/ParkingLot.vue";
import { ICar } from "./interfaces/Car";

const cars: ICar[] = [
  { color: "#1b2e99" },
  { color: "#1bbe29" },
  { color: "#1bce89" },
  { color: "#000" },
  { color: "#ccc" },
  { color: "#999" },
];

const cars2: ICar[] = [
  { color: "#d94518" },
  { color: "#0c9ba6" },
  { color: "#dbdb0d" },
];
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
