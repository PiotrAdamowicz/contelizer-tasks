<template>
  <div class="sm:w-4/5 mx-auto">
    <Description :text="taskDescriptionText" task="Task 1" />
    <FileInput @uploadFile="uploadFile" @submitFile="submitFile" />
    <article v-if="originalText && jumbledText" class="flex m-4 gap-4 sm:gap-8">
      <TextColumn label="Original Text" :text="originalText" />
      <TextColumn label="Jumbled Text" :text="jumbledText" />
    </article>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Description from "../components/Description.vue";
import FileInput from "../components/FileInput.vue";
import TextColumn from "../components/TextColumn.vue";
import { useFileSubmit } from "../composables/useFileInput";

const file = ref(null);
const jumbledText = ref(null);
const originalText = ref(null);

const uploadFile = (event) => {
  file.value = event.target.files[0];
};

const submitFile = () => {
  useFileSubmit(file, jumbledText, originalText);
};

const taskDescriptionText =
  "Write program in Vue3 with form taking text file and then randomly change letter order in every row excluding first and last letter of a word. Take in consideration punctuations, capital/lower case letters, multiline texts, polish sings.";
</script>
