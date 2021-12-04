<template>
  <div class="parking-lot">
    <Car v-for="car in cars" :color="car.color" />
  </div>
</template>

<script setup lang="ts">
import Car from "./Car.vue";
import { ICar } from "../interfaces/Car";

defineProps<{ cars: ICar[] }>();
</script>

<style lang="scss" scoped>
.parking-lot {
  width: 850px;
  border-top: 20px black solid;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 15px;
  padding-bottom: 120px;
  display: flex;
  color: #1b2e99;
}
</style>
