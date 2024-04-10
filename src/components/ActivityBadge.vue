<template>
  <span
    class="text-black rounded-lg p-1 text-sm"
    :class="[props.isActive && 'bg-green-500', !isActive && 'bg-red-500']"
    >{{ props.status.toUpperCase() }}</span
  >
</template>
<script setup>
const props = defineProps(["status", "isActive"]);
</script>
