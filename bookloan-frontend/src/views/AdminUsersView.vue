<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />
    <div class="p-4 my-4">
      <h2 class="font-semibold text-base">Users</h2>
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
            <td class="p-2 border">User</td>
            <td class="p-2 flex gap-2 border">
              <button class="bg-red-500 text-white py-2 px-6 text-xs w-fit h-fit">Delete</button>
            </td>
          </tr>
          <tr class="border-b py-2">
            <td class="p-2 border">John Doe</td>
            <td class="p-2 border">XZkK@example.com</td>
            <td class="p-2 border">Admin</td>
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
