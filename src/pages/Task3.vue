<template>
  <div class="sm:w-3/4 mx-auto">
    <Description :text="taskDescriptionText" task="Task 3" />
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
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import ErrorMsg from "../components/ErrorMsg.vue";
import UserCard from "../components/UserCard.vue";
import Search from "../components/Search.vue";
import { useUsersStore } from "../stores/users";
import Description from "../components/Description.vue";

const store = useUsersStore();

onMounted(() => {
  store.getUsers();
});
const taskDescriptionText =
  "Write Vue3 app fetching API data from https://gorest.co.in/. App should have user list view (from API) and options for searching and editing users.";
</script>
