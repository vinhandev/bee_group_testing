import { expect, test } from "vitest";
import { formatMoney } from "./money";

test("test comma", () => {
  expect(formatMoney(1234)).toBe("$1,234");
});
test("test comma 6 number", () => {
  expect(formatMoney(1234567)).toBe("$1,234,567");
});
test("test comma 9 number", () => {
  expect(formatMoney(1234567890)).toBe("$1,234,567,890");
});
test("test undefined", () => {
  expect(formatMoney(0)).toBe("$0");
});
