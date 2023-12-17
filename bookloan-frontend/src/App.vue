<script setup>
import { RouterView } from "vue-router";
import "@/assets/css/main.css";
import NavbarComponent from "@/components/NavbarComponent.vue";
</script>

<template>
  <main class="container bg-white mx-auto">
    <header>
      <div class="wrapper">
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/books">Books</RouterLink>
        </nav> -->
        <navbar-component />
      </div>
    </header>
    <RouterView />
  </main>
</template>
