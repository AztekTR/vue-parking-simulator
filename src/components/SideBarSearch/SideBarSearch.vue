<template>
  <div :class="`sidebar ${isActive ? 'sidebar--active' : ''}`">
    <button class="sidebar__expand-button" @click="toggleSideBar">
      {{ isActive ? "&#62;" : "&#60;" }}
    </button>
    <Search v-if="isActive" :parking-lots="parkingLots"/>
  </div>
</template>

<script setup lang="ts">
import Search from './Search.vue'
import { ref, Ref, toRefs } from "vue";
import { IParkingLot } from '../../interfaces/ParkingLot';

const props = defineProps<{ parkingLots: IParkingLot[] }>();
const {parkingLots} = toRefs(props);
let isActive: Ref<boolean> = ref(false);

const toggleSideBar = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 70px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  display: flex;
  align-items: center;

  transition: width 0.6s ease;

  &--active {
    width: 33vw;
  }

  &__expand-button {
    padding: 6px 20px;
    font-size: 2.25rem;
    font-weight: bold;
    color: rgb(236, 236, 236);
    background-color: transparent;
    border: none;
  }
}
</style>
