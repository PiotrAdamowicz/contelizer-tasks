import { ref } from "vue";
import { checPeselControlNumber, checkPeselLength } from "../utils/validation";

export function usePeselValidation() {
  const isValid = ref(false);
  const message = ref(null);

  function validatePeselNumber(number) {
    const isLengthValid = checkPeselLength(number);
    const isControNumberValid = checPeselControlNumber(number);

    if (!isLengthValid) {
      isValid.value = false;
      message.value = "Nieprawidłowa długośc numeru PESEL";
    } else if (!isControNumberValid) {
      isValid.value = false;
      message.value = "Nieprawidłowy PESEL";
    } else {
      isValid.value = true;
    }
  }

  return { isValid, message, validatePeselNumber };
}
