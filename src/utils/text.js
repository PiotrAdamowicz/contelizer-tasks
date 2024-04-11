export function jumbleWord(text) {
  const words = text.match(
    /[\w']+|[.,!?;:'"\(\)\[\]{}\/\\@#$%^&*_+=`~|<>]+|\n/g
  );
  let previousWord = "";
  const jumbleMiddle = words.map(function (element) {
    //cheks if elemet is a word
    if (/[\w'-]+/.test(element)) {
      const letters = /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g;
      const wordLetters = element.match(letters);
      //wordLetters must be more that 2 characters to be able to jumbel only the middle part
      if (wordLetters && wordLetters.length > 2) {
        const middleLetters = shuffleArray(wordLetters.slice(1, -1));
        const lastLetter = wordLetters[wordLetters.length - 1];
        const firstLetter = wordLetters[0];
        element = firstLetter + "," + middleLetters + "," + lastLetter;
      }
      const result = element.replace(/,/g, "");

      if (previousWord !== "") {
        return " " + result;
      }
      previousWord = result;
      return result;
    } else {
      //handling line break
      if (element === "\n") {
        return element;
      }
      // Skip concatenation if previousWord is already punctuation
      if (!/[,.;:!?]/.test(previousWord)) {
        previousWord += element;
      }
      return element;
    }
  });
  const jumbledText = jumbleMiddle.join("");
  return jumbledText;
}

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
