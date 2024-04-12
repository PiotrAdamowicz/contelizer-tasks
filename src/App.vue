<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Test />
  <Navbar />
  <main class="m-2 sm:m-0 grow sm:w-5/6">
    <suspense>
      <RouterView />
    </suspense>
  </main>
</template>
