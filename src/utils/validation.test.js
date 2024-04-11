import { expect, test } from "vitest";
import { checkPeselLength, checPeselControlNumber } from "./validation";

test("checks if length on given number is equal to 11", () => {
  expect(checkPeselLength("90012500630")).toBe(true);
});
test("check if number is valid by checking control number", () => {
  expect(checPeselControlNumber("90012500630")).toBe(true);
  expect(checPeselControlNumber("90042002258")).toBe(true);
  expect(checPeselControlNumber("97013074423")).toBe(true);
  expect(checPeselControlNumber("90012500631")).toBe(false);
  expect(checPeselControlNumber("90012500640")).toBe(false);
  expect(checPeselControlNumber("02070803624")).toBe(false);
  expect(checPeselControlNumber("02070803628")).toBe(false);
});
