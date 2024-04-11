<template>
  <p>
    <span class="italic text-xs sm:text-base">{{ props.label }}: </span>
    <span v-if="!editActive" class="text-black sm:text-xl">{{ value }}</span>
    <input
      v-model="value"
      v-if="editActive"
      :placeholder="props.value"
      type="text"
      class="sm:text-xl w-fit text-gray-400 focus:text-black outline-none px-1 rounded"
    />
  </p>
</template>
<script setup>
const props = defineProps(["label", "data", "editActive", "id"]);
const value = defineModel();
</script>
