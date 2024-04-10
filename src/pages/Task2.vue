<template>
  <h1 class="text-6xl">Task 2</h1>
  <input v-model="pesel" type="text" />
</template>
<script setup>
import { ref } from "vue";
const pesel = ref(null);
</script>
