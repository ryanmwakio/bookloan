<script setup>
import CardComponent from "@/components/CardComponent.vue";
import { onMounted, ref } from "vue";
import img1 from "@/assets/images/book1.png";
import img2 from "@/assets/images/book2.png";
import img3 from "@/assets/images/book3.png";
import img4 from "@/assets/images/book4.png";
import img5 from "@/assets/images/book5.png";
import img6 from "@/assets/images/book6.png";
import img7 from "@/assets/images/book7.png";
import img8 from "@/assets/images/book8.png";
import img9 from "@/assets/images/book9.png";
import img10 from "@/assets/images/book10.png";
import img11 from "@/assets/images/book11.png";
import img12 from "@/assets/images/book12.png";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const info = [
  {
    id: 1,
    title: "The Story of Success",
    author: "Ceridwen Dovey",
    img: img1,
    is_available: true
  },
  {
    id: 2,
    title: "Blue is a darkness weakened by light",
    author: " Sarah Mc",
    img: img2,
    is_available: false
  },
  {
    id: 3,
    title: "The Story of Success",
    author: "John Doe",
    img: img3,
    is_available: true
  },
  {
    id: 4,
    title: "The Story of Success",
    author: "John Doe",
    img: img4,
    is_available: true
  },
  {
    id: 5,
    title: "The Story of Success",
    author: "John Doe",
    img: img5,
    is_available: true
  },
  {
    id: 6,
    title: "The Story of Success",
    author: "John Doe",
    img: img6,
    is_available: true
  },
  {
    id: 7,
    title: "The Story of Success",
    author: "John Doe",
    img: img7,
    is_available: true
  },
  {
    id: 7,
    title: "The Story of Success",
    author: "John Doe",
    img: img8,
    is_available: true
  },
  {
    id: 7,
    title: "The Story of Success",
    author: "John Doe",
    img: img9,
    is_available: true
  },
  {
    id: 7,
    title: "The Story of Success",
    author: "John Doe",
    img: img10,
    is_available: true
  },
  {
    id: 7,
    title: "The Story of Success",
    author: "John Doe",
    img: img11,
    is_available: true
  },
  {
    id: 7,
    title: "The Story of Success",
    author: "John Doe",
    img: img12,
    is_available: true
  }
];

const user = ref({});

onMounted(async () => {
  user.value = await authStore.getUser();
});
</script>

<template>
  <div class="container my-3 py-2 px-3 text-xl font-semibold">All Books</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-red-200 mx-auto w-full container p-2 md:p-4">
    <div v-for="item in info" :key="item.id">
      <card-component :info="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
