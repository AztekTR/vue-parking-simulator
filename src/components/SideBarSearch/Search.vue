<template>
  <div class="search">
    <input class="search__input" type="text" v-model="input" />
    <div class="search__output">
      <ItemCard
        class="search__item-card"
        v-for="item of allCars"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import { toRefs, ComputedRef, computed, Ref, ref } from "vue";
import { ICar } from "../../interfaces/Car";
import { IParkingLot } from "../../interfaces/ParkingLot";
import markupCar from "../../constants/markup-car";

const props = defineProps<{ parkingLots: IParkingLot[] }>();
const { parkingLots } = toRefs(props);
const input: Ref<string> = ref("");

const carFilter = (car: ICar, searchFilter: RegExp) =>
  car.model !== markupCar.model &&
  (searchFilter.test(car.model) || searchFilter.test(car.makeYear.toString()));

const allCars: ComputedRef<ICar[]> = computed(() => {
  let cars: ICar[] = [];
  const searchFilter: RegExp = new RegExp(input.value, "i");

  Object.values(parkingLots.value).forEach((parkingLot) => {
    const filteredCars: ICar[] = parkingLot.cars.filter((car) =>
      carFilter(car, searchFilter)
    );

    cars = [...cars, ...filteredCars];
  });

  return cars;
});
</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  padding: 50px 20px;

  &__input {
    padding: 5px 10px;
    font-size: 3rem;
  }

  &__output {
    margin-top: 20px;
  }

  &__item-card {
    margin: 5px 0;
  }
}
</style>
