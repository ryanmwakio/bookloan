<script setup>
import { defineProps } from "vue";

defineProps({
  percentage: {
    type: Number
  }
});
</script>

<template>
  <div class="w-full bg-gray-300 h-2 relative">
    <div
      class="absolute left-0 top-0 bottom-0 bg-primary-orange"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</template>

<style lang="scss" scoped></style>
