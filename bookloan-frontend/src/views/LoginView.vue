<script setup>
import { RouterLink } from "vue-router";
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <section class="bg-white">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold dark:text-white">
        <img class="h-8" src="../assets/images/logo.png" alt="logo" />
      </router-link>
      <div class="w-full bg-white shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
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
                id="password"
                placeholder="••••••••"
                class="bg-white text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none border border-primary-black"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300 bg-white"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-900">Remember me</label>
                </div>
              </div>
            </div>

            <button-component text="Sign in" />

            <p class="text-sm font-base text-gray-900">
              Don’t have an account yet?
              <router-link
                to="/register"
                class="font-medium text-primary-600 hover:underline text-primary-500"
                >Sign up</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
