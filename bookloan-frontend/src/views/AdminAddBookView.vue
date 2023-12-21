<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
import { useBookStore } from "@/stores/book";
import { ref } from "vue";

const bookCategories = [
  "Fiction",
  "Mystery/Thriller",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Historical Fiction",
  "Horror",
  "Non-fiction",
  "Biography/Memoir",
  "Self-Help",
  "Business/Finance",
  "Science",
  "Philosophy",
  "Psychology",
  "Travel",
  "Cookbooks",
  "Art/Photography",
  "Children's Books",
  "Young Adult",
  "Poetry"
];

const bookSubcategories = [
  "Contemporary Fiction",
  "Crime Fiction",
  "Space Opera",
  "Urban Fantasy",
  "Historical Mystery",
  "Psychological Thriller",
  "Dystopian Fiction",
  "Paranormal Romance",
  "Regency Romance",
  "Autobiography",
  "Personal Development",
  "Leadership",
  "Personal Finance",
  "True Crime",
  "Popular Science",
  "Eastern Philosophy",
  "Cognitive Psychology",
  "Adventure Travel",
  "Mediterranean Cuisine",
  "Abstract Art"
];

const bookStore = useBookStore();

const form = ref({
  name: "",
  publisher: "",
  isbn: "",
  category: "",
  sub_category: "",
  pages: "",
  image: ""
});

const handleImage = (event) => {
  form.value.image = event.target.files[0];
};
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />
    <div class="p-4">
      <h3 class="font-semibold text-base text-center">Add a Book</h3>

      <div class="p-4 flex w-full">
        <form enctype="multipart/form-data" @submit.prevent="bookStore.addBook(form)">
          <div class="my-4">
            <label for="name" class="block text-xs mb-1">Name</label>
            <input
              type="text"
              name="name"
              v-model="form.name"
              id="name"
              placeholder="Book name"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            />
          </div>
          <div class="my-4">
            <label for="publisher" class="block text-xs mb-1">Publisher</label>
            <input
              type="text"
              name="publisher"
              v-model="form.publisher"
              id="publisher"
              placeholder="Publisher"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            />
          </div>
          <div class="my-4">
            <label for="isbn" class="block text-xs mb-1">ISBN</label>
            <input
              type="text"
              name="isbn"
              v-model="form.isbn"
              id="isbn"
              placeholder="ISBN"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            />
          </div>
          <div class="my-4">
            <label for="category" class="block text-xs mb-1">Category</label>
            <select
              type="text"
              name="category"
              v-model="form.category"
              id="category"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            >
              <option v-for="category in bookCategories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div class="my-4">
            <label for="sub_category" class="block text-xs mb-1">Sub-Category</label>
            <select
              type="text"
              name="sub_category"
              v-model="form.sub_category"
              id="sub_category"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            >
              <option v-for="category in bookSubcategories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div class="my-4">
            <label for="description" class="block text-xs mb-1">Description</label>
            <textarea
              name="description"
              v-model="form.description"
              id="description"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            />
          </div>
          <div class="my-4">
            <label for="pages" class="block text-xs mb-1">Pages</label>
            <input
              type="number"
              name="pages"
              v-model="form.pages"
              id="pages"
              placeholder="Pages"
              class="border border-primary-black focus:outline-none py-2 px-4 text-xs w-96"
              required
            />
          </div>
          <div class="my-4">
            <label for="image" class="block text-xs mb-1">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              class="w-96"
              @change="handleImage"
              required
            />
          </div>
          <div class="my-4">
            <button type="submit" class="bg-primary-black text-white px-4 py-2">
              {{ bookStore.loading ? "Loading..." : "Create" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
