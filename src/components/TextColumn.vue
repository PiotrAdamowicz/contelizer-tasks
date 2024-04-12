<template>
  <div>
    <h2 class="text-sm sm:text-2xl md:text-3xl font-bold">{{ label }}:</h2>
    <p class="text-xs sm:text-xl md:text-2xl italic">{{ text }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["label", "text"]);
</script>
