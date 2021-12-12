<template>
  <div class="parking-lot__container">
    <div
      class="parking-lot parking-lot--reversed"
      :style="`width:${(parkingLot.capacity / 2) * 140 + 10}px`"
    >
      <Car
        v-for="car in topCars"
        :car="car"
        :reversed="true"
        :transparent="car.model === 'markup'"
      />
    </div>
    <div
      class="parking-lot"
      :style="`width:${(parkingLot.capacity / 2) * 140 + 10}px`"
    >
      <Car
        v-for="car in bottomCars"
        :car="car"
        :transparent="car.model === 'markup'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed, ComputedRef } from "vue";
import Car from "./Car.vue";
import { ICar } from "../interfaces/Car";
import { IParkingLot } from "../interfaces/ParkingLot";

const props = defineProps<{ parkingLot: IParkingLot }>();
const { parkingLot } = toRefs(props);

const topCars: ComputedRef<ICar[]> = computed(() =>
  parkingLot.value.cars.slice(0, parkingLot.value.capacity / 2)
);
const bottomCars: ComputedRef<ICar[]> = computed(() =>
  parkingLot.value.cars.slice(
    parkingLot.value.capacity / 2,
    parkingLot.value.capacity
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
