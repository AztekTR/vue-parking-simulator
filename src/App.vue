<template>
  <div style="display: flex; flex-direction: column">
    <ParkingLot v-for="lot of parkingLots" :parking-lot="lot" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ParkingLot from "./components/ParkingLot.vue";
import { ICar } from "./interfaces/Car";
import { IParkingLot } from "./interfaces/ParkingLot";
import randint from "./utils/randint";
import markupCar from "./constants/markup-car";
import models from "./constants/car-models";
import colors from "./constants/car-colors";

const parkingLots: IParkingLot[] = reactive([
  {
    cars: Array(36).fill(markupCar),
    capacity: 36,
  },
  {
    cars: Array(36).fill(markupCar),
    capacity: 36,
  },
  {
    cars: Array(36).fill(markupCar),
    capacity: 36,
  },
]);

const replaceRandomCar =
  (newCarCallback: () => ICar) =>
  (noMarkupCar: boolean = true): void => {
    const randLotIndex: number = randint(0, parkingLots.length);
    const parkingLot: IParkingLot = parkingLots[randLotIndex];
    const randCarIndex: number = randint(0, parkingLot.cars.length);
    const car: ICar = parkingLot.cars[randCarIndex];

    if (noMarkupCar ? car.model !== "markup" : car.model === "markup") {
      return;
    }

    const newCar: ICar = newCarCallback();

    const cars: ICar[] = [...parkingLot.cars];
    cars[randCarIndex] = newCar;

    parkingLots[randLotIndex] = { ...parkingLots[randLotIndex], cars };
  };

const pushRandomCar = replaceRandomCar(() => {
  return {
    model: models[randint(0, models.length)],
    makeYear: randint(1990, 2021),
    color: colors[randint(0, colors.length)],
  };
});
const deleteRandomCar = replaceRandomCar(() => markupCar);

onMounted(() => {
  setInterval(pushRandomCar, 100);
  setInterval(deleteRandomCar, 200);
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

<!-- const pushRandomCar = () => {
  const randLotIndex: number = randint(0, parkingLots.length);
  const parkingLot: IParkingLot = parkingLots[randLotIndex];
  const randCarIndex: number = randint(0, parkingLot.cars.length);
  const car: ICar = parkingLot.cars[randCarIndex];

  if (car.model !== "markup") {
    return;
  }

  const newCar: ICar = {
    model: models[randint(0, models.length)],
    makeYear: randint(1990, 2021),
    color: colors[randint(0, colors.length)],
  };

  const cars: ICar[] = [...parkingLot.cars];
  cars[randCarIndex] = newCar;

  parkingLots[randLotIndex] = { ...parkingLots[randLotIndex], cars };
};

const deleteRandomCar = () => {
  const randLotIndex = randint(0, parkingLots.length);
  const parkingLot = parkingLots[randLotIndex];
  const randCarIndex = randint(0, parkingLot.cars.length);
  const car = parkingLot.cars[randCarIndex];

  if (car.model === "markup") {
    return;
  }

  const newCar = markupCar;

  const cars = [...parkingLot.cars];
  cars[randCarIndex] = newCar;

  parkingLots[randLotIndex] = { ...parkingLots[randLotIndex], cars };
}; -->
