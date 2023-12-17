<script setup>
import { defineProps } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import RangeComponent from "@/components/RangeComponent.vue";

const props = defineProps(["info"]);
</script>

<template>
  <div class="py-3 px-2">
    <div class="grid grid-cols-2">
      <div class="bg-white p-4">
        <div
          :style="{ backgroundImage: 'url(' + props.info.img + ')' }"
          class="w-full h-72 bg-center bg-cover bg-no-repeat"
        ></div>
      </div>
      <div class="flex flex-col justify-between bg-white p-4">
        <div>
          <span class="text-muted text-xs"
            ><span class="italic text-xs">By</span> {{ props.info.author }}</span
          >
          <h5 class="my-2 font-semibold text-sm w-full">{{ props.info.title }}</h5>
        </div>

        <div>
          <div class="flex flex-col my-4">
            <h4 class="text-xs mb-2">Loan Days Remaining <span class="italic">2/4</span></h4>
            <range-component :percentage="50" />
          </div>
          <button-component text="Get Book" :showIcon="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
