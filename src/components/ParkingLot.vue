<template>
  <div class="parking-lot__container">
    <div
      class="parking-lot parking-lot--reversed"
      :style="`width:${(parkingLot.cars.length / 2) * 140 + 10}px`"
    >
      <Car
        v-for="car in topCars"
        :car="car"
        :reversed="true"
        :transparent="car.model === markupCar.model"
      />
    </div>
    <div
      class="parking-lot"
      :style="`width:${(parkingLot.cars.length / 2) * 140 + 10}px`"
    >
      <Car
        v-for="car in bottomCars"
        :car="car"
        :transparent="car.model === markupCar.model"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed, ComputedRef } from "vue";
import Car from "./Car.vue";
import markupCar from "../constants/markup-car";
import { ICar } from "../interfaces/Car";
import { IParkingLot } from "../interfaces/ParkingLot";

const props = defineProps<{ parkingLot: IParkingLot }>();
const { parkingLot } = toRefs(props);

const topCars: ComputedRef<ICar[]> = computed(() =>
  parkingLot.value.cars.slice(0, parkingLot.value.cars.length / 2)
);
const bottomCars: ComputedRef<ICar[]> = computed(() =>
  parkingLot.value.cars.slice(
    parkingLot.value.cars.length / 2,
    parkingLot.value.cars.length
  )
);
</script>

<style lang="scss" scoped>
.parking-lot {
  border-top: 12px black solid;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  color: #1b2e99;

  &__container {
    margin-left: 15px;
    margin-bottom: 40px;
    margin-top: 80px;
  }

  &--reversed {
    transform: rotate(180deg);
  }
}
</style>
