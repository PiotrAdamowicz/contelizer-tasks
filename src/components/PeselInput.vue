<template>
  <div
    class="w-full mx-auto my-4 border-2 flex border-black rounded divide-x-2 divide-black shadow-xl shadow-sky-900"
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
      @keyup.enter="$emit('handelValidation', pesel)"
    />
    <button
      class="p-2 w-fit sm:w-1/5 hover:bg-gray-400 transition-all hover:text-white text-sm sm:text-base"
      type="submit"
      @click="$emit('handelValidation', pesel)"
    >
      Sprawdź
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const pesel = ref(null);
</script>
