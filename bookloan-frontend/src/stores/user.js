import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: []
  }),
  getters: {
    getUsers: (state) => state.users
  },
  actions: {
    async fetchUsers() {
      const token = localStorage.getItem("token");
      if (!token) return;

      const { data } = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      this.users = data.data;
    },
    async makeUserAdmin(id) {
      const token = localStorage.getItem("token");
      if (!token) return;

      await axios.post(
        `/users/${id}/makeadmin`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      this.fetchUsers();
      alert("user added as admin");
      return;
    },
    async removeUserAdmin(id) {
      const token = localStorage.getItem("token");
      if (!token) return;

      await axios.post(
        `/users/${id}/removeadmin`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      this.fetchUsers();

      alert("user removed as admin");
      return;
    },
    async deleteUser(id) {
      const token = localStorage.getItem("token");
      if (!token) return;

      await axios.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      this.fetchUsers();
      alert("user deleted");

      return;
    }
  }
});
