<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="mx-2 my-2 sm:mr-0 w-full sm:w-1/6 flex sm:flex-col gap-2">
    <RouterLink
      class="px-4 py-2 rounded border-2 border-black transition-all hover:bg-gray-200"
      to="/"
      >Task 1</RouterLink
    >
    <RouterLink
      class="px-4 py-2 rounded border-2 border-black hover:bg-gray-200"
      to="/task2"
      >Task 2</RouterLink
    >
    <RouterLink
      class="px-4 py-2 rounded border-2 border-black hover:bg-gray-200"
      to="/task3"
      >Task 3</RouterLink
    >
  </nav>
  <main class="m-2 sm:m-0 grow sm:w-5/6">
    <suspense>
      <RouterView />
    </suspense>
  </main>
</template>
