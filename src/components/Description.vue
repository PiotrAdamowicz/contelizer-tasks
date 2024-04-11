<template>
  <h1 class="text-4xl mb-2">{{ task }}:</h1>
  <p class="text-black">
    {{ text }}
  </p>
</template>
<script setup>
const props = defineProps(["text", "task"]);
</script>
