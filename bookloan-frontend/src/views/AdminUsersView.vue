<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />
    <div class="p-4 my-4">
      <div>
        <router-link
          to="/register"
          class="bg-primary-orange text-white py-2 px-6 text-xs w-fit h-fit"
          >Add User</router-link
        >
      </div>
      <table class="w-full text-xs mt-4 border">
        <thead class="border">
          <tr class="text-left">
            <th class="p-2 border">Name</th>
            <th class="p-2 border">Email</th>
            <th class="p-2 border">Role</th>
            <th class="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b py-2">
            <td class="p-2 border">John Doe</td>
            <td class="p-2 border">XZkKzsdsdsdsdsds@example.com</td>
            <td class="p-2 border">
              <p>User</p>
              <div class="flex gap-2 items-center">
                <label for="">change role</label>
                <select
                  name=""
                  id=""
                  class="border border-primary-black focus:outline-none text-xs cursor-pointer"
                >
                  <option value="">Admin</option>
                  <option value="">User</option>
                </select>
              </div>
            </td>
            <td class="p-2 flex gap-2 border">
              <button class="bg-red-500 text-white py-2 px-6 text-xs w-fit h-fit">Delete</button>
            </td>
          </tr>
          <tr class="border-b py-2">
            <td class="p-2 border">John Doe</td>
            <td class="p-2 border">XZkK@example.com</td>
            <td class="p-2 border">
              <p>Admin</p>
              <div class="flex gap-2 items-center">
                <label for="">change role</label>
                <select
                  name=""
                  id=""
                  class="border border-primary-black focus:outline-none text-xs cursor-pointer"
                >
                  <option value="">Admin</option>
                  <option value="">User</option>
                </select>
              </div>
            </td>
            <td class="p-2 flex gap-2 border">
              <button class="bg-red-500 text-white py-2 px-6 text-xs w-fit h-fit">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
