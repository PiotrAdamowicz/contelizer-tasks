<template>
  <div v-if="show" class="shadow-md shadow-sky-700">
    <div v-if="valid" class="bg-green-500 p-2 rounded">
      <h2 class="font-bold text-white">{{ message }}</h2>
    </div>
    <div v-if="!valid" class="bg-red-500 p-2 rounded">
      <h2 class="font-bold text-white">{{ error }} !</h2>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["message", "valid", "error", "show"]);
</script>
