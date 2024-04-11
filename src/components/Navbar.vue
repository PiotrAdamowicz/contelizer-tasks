<template>
  <nav class="mx-2 my-2 sm:mr-0 sm:w-1/6 flex sm:flex-col gap-2">
    <RouterLink
      activeClass="active"
      class="px-4 py-2 rounded border-2 border-black transition-all hover:bg-sky-400"
      to="/"
      >Task 1</RouterLink
    >
    <RouterLink
      activeClass="active"
      class="px-4 py-2 rounded border-2 border-black hover:bg-sky-400"
      to="/task2"
      >Task 2</RouterLink
    >
    <RouterLink
      activeClass="active"
      class="px-4 py-2 rounded border-2 border-black hover:bg-sky-400"
      to="/task3"
      >Task 3</RouterLink
    >
  </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.active {
  position: relative;
  z-index: 10;
}
.active::before {
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  display: block;
  content: "";
  height: 100%;
  @apply bg-blue-500 w-1/5 sm:w-1/4 md:w-2/5;
}
</style>
