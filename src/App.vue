<template>
  <div style="display: flex; flex-direction: column">
    <ParkingLot v-for="lot of parkingLots$" :parking-lot="lot" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import ParkingLot from "./components/ParkingLot.vue";
import { ICar } from "./interfaces/Car";
import { IParkingLot } from "./interfaces/ParkingLot";

const parkingLots: IParkingLot[] = reactive([
  {
    cars: [],
    capacity: 36,
  },
  {
    cars: [],
    capacity: 36,
  },
  {
    cars: [],
    capacity: 36,
  },
]);

const parkingLots$ = computed(() => parkingLots);

const models: string[] = [
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

const colors: string[] = [
  "#0e0075",
  "#005091",
  "#616161",
  "#343434",
  "#1a1a1a",
  "#1a1a1a",
  "#1a1a1a",
  "#ededed",
  "#ededed",
  "#ededed",
  "#999999",
  "#999999",
  "#c40000",
  "#06b000",
];

const randint = (int: number) => ~~(Math.random() * int);

const pushRandomCar = () => {
  const parkingLot = parkingLots[randint(parkingLots.length)];

  if (parkingLot.cars.length >= parkingLot.capacity) {
    return;
  }

  parkingLot.cars.push({
    color: colors[randint(colors.length)],
    model: models[randint(models.length)],
  });
};

onMounted(() => {
  setInterval(pushRandomCar, 50);
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #7a7a7a;
  min-height: 100vh;
  min-width: 100vw;
  color: #000;
}
</style>
