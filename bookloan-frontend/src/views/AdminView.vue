<script setup>
import { onMounted, ref } from "vue";
import AdminNavComponent from "@/components/AdminNavComponent.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const user = ref({});

onMounted(async () => {
  user.value = await authStore.getUser();
});
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />
    <div class="p-4 my-4">ADMIN VIEW: HELLO SOLUTECH 🖐️😉</div>
  </main>
</template>

<style lang="scss" scoped></style>
