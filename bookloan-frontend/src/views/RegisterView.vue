<script setup>
import { RouterLink } from "vue-router";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
});
</script>

<template>
  <section class="bg-white">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-6 lg:py-0">
      <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold dark:text-white">
        <img class="h-8" src="../assets/images/logo.png" alt="logo" />
      </router-link>
      <div class="w-full bg-white shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"
          >
            Create a new account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.handleRegister(form)">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                >Your Name</label
              >
              <input
                type="text"
                v-model="form.name"
                name="name"
                id="name"
                class="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white focus:outline-none border border-primary-black"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
                v-model="form.email"
                name="email"
                id="email"
                class="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white focus:outline-none border border-primary-black"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="form.password"
                id="password"
                placeholder="••••••••"
                class="bg-white text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none border border-primary-black"
                required=""
              />
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900"
                >Confirm Password</label
              >
              <input
                type="password"
                name=" confirm-password"
                v-model="form.password_confirmation"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-white text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none border border-primary-black"
                required=""
              />
            </div>

            <button-component type="submit" :text="authStore.loading ? 'Loading...' : 'Register'" />

            <p class="text-sm font-base text-gray-900">
              Already have an account?
              <router-link
                to="/login"
                class="font-medium text-primary-600 hover:underline text-primary-500"
                >Signin</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
