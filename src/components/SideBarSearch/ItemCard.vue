<template>
  <div class="item">
    <p class="item__text-field">{{ item.model }}</p>
    <p class="item__text-field">{{ item.makeYear }}</p>
    <p class="item__text-field">
      <span
        class="item__text-field__color"
        :style="`background-color: ${item.color};`"
      ></span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { ICar } from "../../interfaces/Car";

const props = defineProps<{ item: ICar }>();
const { item } = toRefs(props);
</script>

<style lang="scss" scoped>
.item {
  padding: 5px 10px;
  background-color: rgb(204, 204, 204);

  &__text-field {
    margin: 5px 0;
    font-size: 1.5rem;
    font-weight: 500;

    &__color {
      padding: 2px 15px;
    }
  }
}
</style>
