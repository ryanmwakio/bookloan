<script setup>
import { defineProps } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

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
            <h4 class="text-xs mb-2">Loan Days Remaining <span class="italic">4/5</span></h4>
            <div class="w-full bg-gray-300 h-2 relative">
              <div
                class="absolute left-0 top-0 bottom-0 bg-primary-orange"
                :style="{ width: '50%' }"
              ></div>
            </div>
          </div>
          <button-component text="Get Book" :showIcon="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
