<script setup>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/main.css";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/books">Books</RouterLink>
      </nav>
    </div>
  </header>
  <button class="btn btn-primary">test</button>
  <RouterView />
</template>
