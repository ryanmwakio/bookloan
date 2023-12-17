<script setup>
import { RouterView } from "vue-router";
import "@/assets/css/main.css";
</script>

<template>
  <main class="container bg-white mx-auto">
    <header>
      <div class="wrapper">
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/books">Books</RouterLink>
        </nav> -->
      </div>
    </header>
    <RouterView />
  </main>
</template>
