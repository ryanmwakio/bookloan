import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    isLoading: false
  }),
  getters: {
    user: (state) => state.authUser,
    loading: (state) => state.isLoading
  },
  actions: {
    async handleLogin(data) {
      try {
        this.isLoading = true;
        const response = await axios.post("/login", {
          email: data.email,
          password: data.password
        });

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);

          if (response.data.user.role === "admin") {
            this.router.push("/admin");
          } else {
            this.router.push("/");
          }
        }
      } catch (error) {
        console.error("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    async getUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }
      const response = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.authUser = response.data;
    },
    async handleRegister(data) {
      try {
        this.isLoading = true;

        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        };

        const response = await axios.post(
          "/register",
          {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation
          },
          {
            headers: headers
          }
        );

        this.router.push("/admin/users");
      } catch (error) {
        this.router.push("/admin");
      } finally {
        this.isLoading = false;
      }
    },
    async logout() {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      };

      await axios.post("/logout", {}, { headers: headers });
      localStorage.removeItem("token");
      this.authUser = null;
      this.router.push("/login");

      // window.location.reload();
    }
  }
});
