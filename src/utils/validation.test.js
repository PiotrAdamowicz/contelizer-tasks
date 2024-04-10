import { expect, test } from "vitest";
import { checkPeselLength, checkPeselLength } from "./validation";

test("checks if length on given number is equal to 11", () => {
  expect(checkPeselLength(11111111111)).toBe(true);
});
