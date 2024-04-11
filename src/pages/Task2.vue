<template>
  <div class="sm:w-3/4 mx-auto">
    <h1 class="text-6xl">Task 2</h1>
    <div
      class="w-full mx-auto my-4 border-2 flex border-black rounded divide-x-2 divide-black"
    >
      <label for="pesel" class="p-2 w-1/5 text-center text-sm sm:text-base"
        >PESEL:</label
      >
      <input
        v-model="pesel"
        placeholder="Wprowadz PESEL"
        id="pesel"
        class="p-2 w-full outline-none text-sm sm:text-base"
        type="text"
        @keyup.enter="validatePeselNumber(pesel)"
      />
      <button
        class="p-2 w-fit sm:w-1/5 hover:bg-gray-400 transition-all hover:text-white text-sm sm:text-base"
        type="submit"
        @click="validatePeselNumber(pesel)"
      >
        Sprawdź
      </button>
    </div>
    <!-- TODO: container to make msgs not visible at load? -->
    <!-- VALID -->
    <div v-if="isValid" class="">
      <h2 class="text-green-500 font-bold">Numer jest poprawny.</h2>
    </div>
    <!-- INVALID -->
    <div v-if="!isValid" class="">
      <p class="text-red-500 font-bold">{{ message }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { usePeselValidation } from "../composables/usePeselValidation";

const pesel = ref(null);

const { isValid, message, validatePeselNumber } = usePeselValidation();
</script>
