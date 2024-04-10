<template>
  <button
    @click="$emit('handelClick')"
    class="text-sm rounded-lg py-1 px-2 hover:bg-slate-500 transition-all bg-slate-300"
    :class="props.styles"
  >
    {{ props.text }}
  </button>
</template>
<script setup>
const props = defineProps(["text", "styles"]);
</script>
