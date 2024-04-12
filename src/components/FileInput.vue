<template>
  <div
    class="my-4 border-2 flex border-black rounded divide-x-2 divide-black shadow-md shadow-sky-900"
  >
    <input
      type="file"
      id="file"
      name="file"
      class="p-2 w-full outline-none bg-transparent"
      @change="handelUpload"
      accept=".txt,"
    />
    <button
      class="p-2 w-1/5 hover:bg-sky-600 transition-all hover:text-white"
      type="submit"
      @click="handelSubmit"
    >
      Wyślij
    </button>
  </div>
</template>
<script setup>
const emit = defineEmits(["submitFile", "uploadFile"]);

const handelUpload = (event) => {
  emit("uploadFile", event);
};
const handelSubmit = () => {
  emit("submitFile");
};
</script>
<style scoped>
input::file-selector-button {
  @apply bg-sky-700 rounded-lg border-0 px-3 py-1 cursor-pointer text-white;
}
</style>
