<template>
  <div
    class="car"
    :style="`fill: ${car.color}; fill-opacity: ${transparent ? 0 : 1};`"
    :class="transparent ? '' : 'with-tooltip'"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 47.032 47.032"
      style="enable-background: new 0 0 47.032 47.032"
      xml:space="preserve"
    >
      <g>
        <path
          d="M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805z"
        />
      </g>
    </svg>
    <span class="tooltiptext" :class="reversed ? 'reversed' : ''">
      {{ tooltipText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ComputedRef } from "vue";
import { ICar } from "../interfaces/Car";

const props =
  defineProps<{ car: ICar; transparent?: boolean; reversed?: boolean }>();
const { car } = toRefs(props);

const tooltipText: ComputedRef<string> = computed(
  () =>
    `Model: ${car.value.model}\n Make year: ${car.value.makeYear} \n Color: ${car.value.color}`
);
</script>

<style lang="scss" scoped>
.car {
  width: 140px;
  max-height: 150px;
  border-right: 3px dashed white;

  transition: fill-opacity 0.6s ease;

  &:first-child {
    border-left: 3px dashed white;
  }
}

.tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #ffffff;
  padding: 5px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(151, 174, 202, 0.4);
  white-space: pre;
  text-align: center;
  font-size: 16px;
  color: #343434;

  position: absolute;
  margin-left: -140px;
  margin-top: 150px;
  z-index: 100;
}

.with-tooltip:hover .tooltiptext {
  visibility: visible;
}

.reversed {
  transform: rotate(180deg);
}
</style>
