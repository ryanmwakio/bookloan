<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="p-4 my-4" style="width: 20%; height: 100vh; background: rgb(235, 235, 235)">
    <ul>
      <li>
        <RouterLink
          to="/admin"
          class="my-6 text-xs bg-primary-black text-white flex justify-center items-center hover:shadow-lg transition-all duration-300"
          style="padding: 1rem"
          >Admin
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/admin/books"
          class="my-6 text-xs bg-primary-black text-white flex justify-center items-center hover:shadow-lg transition-all duration-300"
          style="padding: 1rem"
          >Books
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/admin/books/loans"
          class="my-6 text-xs bg-primary-black text-white flex justify-center items-center hover:shadow-lg transition-all duration-300"
          style="padding: 1rem"
          >Book Loans
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/admin/users"
          class="my-6 text-xs bg-primary-black text-white flex justify-center items-center hover:shadow-lg transition-all duration-300"
          style="padding: 1rem"
          >Users
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/register"
          class="my-6 text-xs bg-primary-black text-white flex justify-center items-center hover:shadow-lg transition-all duration-300"
          style="padding: 1rem"
          >Register User
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
