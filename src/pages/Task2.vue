<template>
  <div class="sm:w-3/4 mx-auto">
    <Description :text="taskDescriptionText" task="Task 2" />
    <PeselInput @handelValidation="validatePeselNumber" />
    <ValidationMessage
      message="Numer jest poprawny"
      :error="message"
      :valid="isValid"
    />
  </div>
</template>
<script setup>
import { usePeselValidation } from "../composables/usePeselValidation";
import Description from "../components/Description.vue";
import PeselInput from "../components/PeselInput.vue";
import ValidationMessage from "../components/ValidationMessage.vue";

const { isValid, message, validatePeselNumber, show } = usePeselValidation();
const taskDescriptionText =
  "Write program in Vue3 to validate PESEL number according to official specification. Write unit test for invalid and valid numbers (at least one valid).";
</script>
