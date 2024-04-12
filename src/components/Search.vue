<template>
  <div
    class="sm:w-full mx-auto my-4 border-2 flex border-black rounded divide-x-2 divide-black shadow-md shadow-sky-900"
  >
    <label for="search" class="p-2 w-1/5 text-sm sm:text-base text-center"
      >Filter users:</label
    >
    <input
      v-model="store.search"
      placeholder="Input user name"
      id="search"
      class="p-2 w-full outline-none bg-transparent"
      type="text"
    />
  </div>
</template>
<script setup>
import { useUsersStore } from "../stores/users";

const store = useUsersStore();
</script>
