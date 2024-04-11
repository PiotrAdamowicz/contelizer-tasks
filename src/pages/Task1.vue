<template>
  <div class="sm:w-4/5 mx-auto">
    <h1 class="text-6xl">Task 1</h1>
    <div
      class="my-4 border-2 flex border-black rounded divide-x-2 divide-black"
    >
      <input
        type="file"
        id="file"
        name="file"
        class="p-2 w-full outline-none"
        @change="uploadFile"
        accept=".txt,"
      />
      <button
        class="p-2 w-1/5 hover:bg-gray-400 transition-all hover:text-white"
        type="submit"
        @click="submitFile"
      >
        Wyślij
      </button>
    </div>
    <article v-if="originalText && jumbledText" class="flex m-4 gap-4 sm:gap-8">
      <div class="">
        <h2 class="tex-sm sm:text-2xl font-bold">Original Text:</h2>
        <p class="text-xs sm:text-xl italic">{{ originalText }}</p>
      </div>
      <div class="">
        <h2 class="tex-sm sm:text-2xl font-bold">Jumbled Text:</h2>
        <p class="text-xs sm:text-xl italic">{{ jumbledText }}</p>
      </div>
    </article>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { jumbleWord } from "../utils/text";

const file = ref(null);
const jumbledText = ref(null);
const originalText = ref(null);

const fileName = computed(() => file.value?.name);
const fileExtension = computed(() =>
  fileName.value?.substr(fileName.value?.lastIndexOf(".") + 1)
);
const fileMimeType = computed(() => file.value?.type);

const uploadFile = (event) => {
  file.value = event.target.files[0];
};

const submitFile = async () => {
  const reader = new FileReader();
  reader.readAsText(file.value);
  reader.onload = async () => {
    // console.log(reader.result.split(","));
    const encodedFile = reader.result;
    const data = {
      file: encodedFile,
      fileName: fileName.value,
      fileExtension: fileExtension.value,
      fileMimeType: fileMimeType.value
    };
    originalText.value = data.file;
    jumbledText.value = jumbleWord(data.file);
  };
};
</script>
