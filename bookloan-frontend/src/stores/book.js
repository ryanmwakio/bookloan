import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore("book", {
  state: () => ({
    books: [],
    book: {},
    isloading: false
  }),
  getters: {
    getBooks: (state) => state.books,
    loading: (state) => state.isloading
  },
  actions: {
    async addBook(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("publisher", data.publisher);
      formData.append("isbn", data.isbn);
      formData.append("category", data.category);
      formData.append("sub_category", data.sub_category);
      formData.append("description", data.description);
      formData.append("pages", data.pages);
      formData.append("image", data.image);

      try {
        this.isloading = true;
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        };
        const response = await axios.post("/books", formData, {
          headers
        });

        if (response.data.success) {
          return this.router.push("/admin/books");
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isloading = false;
      }
    },
    async getAllBooks() {
      try {
        this.isloading = true;
        const response = await axios.get("/books");

        this.books = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isloading = false;
      }
    }
  }
});
