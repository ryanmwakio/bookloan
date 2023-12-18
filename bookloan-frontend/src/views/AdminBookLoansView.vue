<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
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
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />
    <div class="p-4">
      <div>
        <h2 class="font-semibold text-base">Unapproved/Pending Book Loans</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-primary-green mx-auto w-full container py-2"
        >
          <div v-for="item in info" :key="item.id">
            <card-component :info="item" />
            <div class="flex gap-2 mx-2">
              <div class="flex flex-col gap-2">
                <router-link
                  :to="`/admin/books/${item.id}/edit`"
                  class="bg-primary-orange text-white py-2 px-6 text-xs w-fit h-fit"
                  >Approve Loan</router-link
                >
                <router-link
                  :to="`/admin/books/${item.id}/edit`"
                  class="bg-primary-orange text-white py-2 px-6 text-xs w-fit h-fit"
                  >Reject Request</router-link
                >
              </div>
              <div class="bg-white py-2 px-6 text-xs">
                <p>
                  <span class="font-semibold">Loan Requested By:</span> John Doe, john@example.com
                </p>
                <p><span class="font-semibold">Request Date:</span> 2022-01-01</p>
                <p><span class="font-semibold">Return Date:</span> 2022-01-01</p>
                <p><span class="font-semibold">Status:</span> Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="font-semibold text-base">Approved Book Loans</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-yellow-300 mx-auto w-full container py-2"
        >
          <div v-for="item in info" :key="item.id">
            <card-component :info="item" />
            <div class="flex gap-2 mx-8">
              <router-link
                :to="`/admin/books/${item.id}/edit`"
                class="bg-primary-orange text-white py-2 px-6 text-xs"
                >Terminate Loan</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
