export function checkPeselLength(number) {
  if (number.length !== 11) {
    return false;
  } else {
    return true;
  }
}
export function checPeselControlNumber(number) {
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const numbers = number.split("").map((num) => Number(num));

  const controlNumber = weights.reduce(
    (acc, weight, idx) => acc + ((weight * numbers[idx]) % 10),
    0
  );
  if (10 - (controlNumber % 10) === numbers[10]) {
    return true;
  } else if (controlNumber % 10 === 0 && numbers[10] === 0) {
    return true;
  } else {
    return false;
  }
}
