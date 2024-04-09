<template>
  <h1 class="text-6xl mb-6">Task 3</h1>
  <Search />
  <ul class="flex flex-col gap-2">
    <li class="" v-for="user in store.filteredUsers" :key="user.id">
      <UserCard :user="user" />
    </li>
    <ErrorMsg error="store.error" v-if="store.error" />
  </ul>
  <h2 v-if="store.loading" class="text-black text-4xl animate-pulse">
    Loading...
  </h2>
</template>
<script setup>
import { onMounted, ref } from "vue";
import ErrorMsg from "../components/ErrorMsg.vue";
import UserCard from "../components/UserCard.vue";
import Search from "../components/Search.vue";
import { useUsersStore } from "../stores/users";

const store = useUsersStore();

onMounted(() => {
  store.getUsers();
});
</script>
