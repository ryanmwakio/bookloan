<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
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

import { useBookStore } from "@/stores/book";
import axios from "axios";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { useToast } from "vue-toast-notification";

const $toast = useToast();
const bookStore = useBookStore();
const books = ref([]);

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

const deleteBtnText = ref("Delete");

const handleDelete = async (id) => {
  try {
    deleteBtnText.value = "Deleting...";
    const token = localStorage.getItem("token");
    const response = await axios.delete("/books/" + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.data.success) {
      $toast.success(response.data.message);
      books.value = books.value.filter((book) => book.id !== id);
    }
  } catch (error) {
    console.log(error);
  } finally {
    deleteBtnText.value = "Delete";
  }
};

onMounted(async () => {
  await bookStore.getAllBooks();
  books.value = await bookStore.getBooks;
});
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />

    <div v-if="books.length === 0 || books === null" class="w-full">
      <loading-component />
    </div>
    <div v-else class="p-4">
      <div class="flex gap-2 justify-end mb-2">
        <RouterLink to="/admin/books/loans" class="bg-primary-green text-white py-2 px-6 text-xs"
          >Book Loans</RouterLink
        >
        <RouterLink to="/admin/books/create" class="bg-primary-orange text-white py-2 px-6 text-xs"
          >Add Book</RouterLink
        >
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gray-100 mx-auto w-full container">
          <div v-for="item in books" :key="item.id">
            <card-component :info="item" />
            <div class="flex gap-2 mx-8">
              <!-- <router-link
                :to="`/admin/books/${item.id}/edit`"
                class="bg-primary-orange text-white py-2 px-6 text-xs"
                >Edit</router-link
              > -->
              <button
                class="bg-red-500 text-white py-2 px-6 text-xs"
                @click="handleDelete(item.id)"
              >
                {{ deleteBtnText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
