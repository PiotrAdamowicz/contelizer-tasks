<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="m-4 flex gap-2">
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
  <main class="m-2">
    <suspense>
      <RouterView />
    </suspense>
  </main>
</template>
