import { defineStore } from "pinia";
import { ref, defineModel, computed } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const search = ref(null);
  const filteredUsers = computed(() => {
    let filter = search.value;
    if (!filter || !filter.length) return users.value;
    return users.value.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  });

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
  function removeUser(id) {
    users.value = users.value.filter((user) => user.id !== id);
  }
  function updateUser(id) {}
  getUsers();
  return { removeUser, filteredUsers, users, getUsers, error, loading, search };
});
