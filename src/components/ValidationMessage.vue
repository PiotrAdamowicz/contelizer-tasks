<template>
  <div v-if="valid">
    <h2 class="font-bold text-green-500">
      {{ message }}
    </h2>
  </div>
  <div v-if="!valid">
    <h2 class="font-bold text-red-500">
      {{ error }}
    </h2>
  </div>
</template>
<script setup>
const props = defineProps(["message", "valid", "error"]);
</script>
