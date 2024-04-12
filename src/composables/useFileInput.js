import { computed } from "vue";
import { jumbleWord } from "../utils/text";

export const useFileSubmit = async (file, jumbledText, originalText) => {
  const fileExtension = computed(() =>
    fileName.value?.substr(fileName.value?.lastIndexOf(".") + 1)
  );
  const fileName = computed(() => file.value?.name);
  const fileMimeType = computed(() => file.value?.type);

  const reader = new FileReader();
  reader.readAsText(file.value);
  reader.onload = async () => {
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
