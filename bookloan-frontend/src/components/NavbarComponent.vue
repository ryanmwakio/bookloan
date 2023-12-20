<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const showMenu = ref(false);
const showLogout = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const user = ref({});

onMounted(async () => {
  user.value = await authStore.getUser();
});
</script>

<template>
  <nav class="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets//images/logo.png" class="h-8 w-28 md:w-28" alt="Book Loan Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Book Loan</span
        >
      </router-link>
      <div to="/login" class="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div
          class="relative"
          v-if="authStore.user"
          @click="showLogout = !showLogout"
          @mouseover="showLogout = true"
        >
          {{ authStore.user.name }}
          <div
            class="absolute right-0 top-100 w-fit h-fit bg-white border flex items-center justify-center py-4 px-10 border-b-primary-orange"
            v-if="showLogout"
          >
            <span class="cursor-pointer text-sm" @click="authStore.logout()">logout</span>
          </div>
        </div>
        <router-link v-else to="/login" class="flex items-center space-x-1">
          <div class="flex items-center gap-1">
            <img src="../assets/images/user.png" alt="" class="w-6 h-6 rounded-full" />
            <span class="text-sm font-semibold">Login</span>
          </div>
        </router-link>

        <div v-if="authStore.user">
          <router-link
            to="/admin"
            class="text-sm font-semibold"
            v-if="authStore.user.role === 'admin'"
            >Admin</router-link
          >
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span class="sr-only">Open main menu</span>

          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 bg-white rounded md:text-primary-black md:p-0"
              aria-current="page"
              >All Books</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="relative" v-if="showMenu">
      <div class="md:hidden relative w-full h-fit p-4">
        <ul>
          <li>
            <router-link to="/" class="block py-2 px-3 hover:bg-gray-100 text-sm font-medium"
              >All Books</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
