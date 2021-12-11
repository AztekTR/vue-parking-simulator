<template>
  <div style="display: flex; flex-direction: column">
    <ParkingLot
      v-for="lot of parkingLots$"
      :parking-lot="lot"
    />
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

const generateColor = (): string =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

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

const parkingLots$ = computed(() => parkingLots);

const randint = (int: number) => ~~(Math.random() * int);

const pushRandomCar = () => {
  const parkingLot = parkingLots[randint(parkingLots.length)]

  if (parkingLot.cars.length >= parkingLot.capacity) {
    return;
  }

  parkingLot.cars.push({
    color: generateColor(),
    model: models[randint(models.length)],
  });
};

onMounted(() => {
  setInterval(pushRandomCar, 10);
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
  overflow: hidden;
}
</style>
