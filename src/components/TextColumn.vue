<template>
  <div>
    <h2 class="tex-sm sm:text-2xl font-bold">{{ label }}:</h2>
    <p class="text-xs sm:text-xl italic">{{ text }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["label", "text"]);
</script>
