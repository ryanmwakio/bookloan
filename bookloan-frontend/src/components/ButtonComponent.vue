<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Get Book"
  },
  showIcon: {
    type: Boolean,
    default: true
  }
});

// prop types
</script>

<template>
  <button
    class="bg-primary-black border border-primary-black text-white text-xs py-2 px-6 cursor-pointer w-fit hover:border hover:border-primary-black hover:bg-white hover:text-primary-black transition-all duration-300 hover:shadow-lg flex items-center gap-3 relative overflow-hidden"
  >
    <span class="z-10">{{ props.text }}</span>
    <span
      class="w-1/2 bg-primary-black h-0.5 absolute z-10"
      style="height: 300%; left: 75%; transform: rotate(45deg)"
    ></span>
    <img src="../assets/images/arrowright.svg" alt="arrow right" class="w-4 z-20" />
  </button>
</template>

<style lang="scss" scoped></style>
