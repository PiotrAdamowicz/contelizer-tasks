<template>
  <div class="my-4 border-2 flex border-black rounded divide-x-2 divide-black">
    <input
      type="file"
      id="file"
      name="file"
      class="p-2 w-full outline-none"
      @change="handelUpload"
      accept=".txt,"
    />
    <button
      class="p-2 w-1/5 hover:bg-gray-400 transition-all hover:text-white"
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
