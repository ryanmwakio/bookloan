<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toast-notification";

const $toast = useToast();

const userStore = useUserStore();
const users = ref([]);

const makeUserAdmin = (id) => {
  userStore.makeUserAdmin(id);
  users.value = userStore.getUsers;
};

const removeUserAdmin = (id) => {
  userStore.removeUserAdmin(id);
  users.value = userStore.getUsers;
};

const deleteUser = (id) => {
  if (!confirm("Are you sure you want to delete this user?")) return;
  userStore.deleteUser(id);
  users.value = userStore.getUsers;
  $toast.success("User deleted successfully");
};

onMounted(async () => {
  await userStore.fetchUsers();
  users.value = userStore.getUsers;
});
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
          <tr class="border-b py-2" v-for="user in users" :key="user.id">
            <td class="p-2 border">{{ user.name }}</td>
            <td class="p-2 border">{{ user.email }}</td>
            <td class="p-2 border">
              <p>{{ user.role }}</p>
              <div class="flex gap-2 items-center">
                <select
                  v-if="user.role !== 'admin'"
                  name=""
                  id=""
                  class="border border-primary-black focus:outline-none text-xs cursor-pointer my-2"
                  @change="makeUserAdmin(user.id, $event)"
                >
                  <option value="user">change role</option>
                  <option value="admin">Admin</option>
                </select>
                <select
                  v-else
                  name=""
                  id=""
                  class="border border-primary-black focus:outline-none text-xs cursor-pointer my-2"
                  @change="removeUserAdmin(user.id)"
                >
                  <option value="admin">change role</option>
                  <option value="user">User</option>
                </select>
              </div>
            </td>
            <td class="p-2 flex gap-2 border">
              <button
                class="bg-red-500 text-white py-2 px-6 text-xs w-fit h-fit"
                @click="deleteUser(user.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
