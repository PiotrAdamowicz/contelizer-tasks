<template>
  <h1 class="text-6xl">Task 3</h1>
  <ul>
    <li class="" v-for="user in store.users" key="user.id">
      {{ user.name }}
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
import { useUsersStore } from "../stores/users";

const store = useUsersStore();

console.log(store.users);

onMounted(() => {
  console.log(store.users);
  store.getUsers();
  console.log(store.users);
});
</script>
