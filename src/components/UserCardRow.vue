<template>
  <p>
    <span class="italic">{{ props.label }}: </span>
    <span v-if="!editActive" class="text-black text-xl">{{ value }}</span>
    <input
      v-model="value"
      v-if="editActive"
      :placeholder="props.value"
      type="text"
      class="text-xl w-fit text-gray-400 focus:text-black outline-none"
    />
  </p>
</template>
<script setup>
const props = defineProps(["label", "data", "editActive", "id"]);
const value = defineModel();
</script>
