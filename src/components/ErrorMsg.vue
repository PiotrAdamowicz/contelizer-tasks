<script setup>
const error = defineProps(["error"]);
</script>

<template>
  <h2 class="text-4xl text-red-500 font-bld">{{ error.error }}</h2>
  <h2 class="text-4xl text-red-500 font-bld">Some Error</h2>
</template>
