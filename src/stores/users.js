import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = ref([]);
  const error = ref(null);
  const loading = ref(false);

  function getUsers() {
    loading.value = true;
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((data) => {
        users.value = data;
      })
      .catch((er) => {
        error.value = err;
        console.error(err);
      })
      .finally(() => {
        loading.value = false;
      });
  }
  getUsers();
  return { users, getUsers, error, loading };
});
