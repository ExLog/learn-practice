import { expect, describe, it } from "bun:test";
import { sum } from "./index.js";

describe("sum", () => {
  it("should sum correctly for positive number", () => {
    expect(sum(1, 1)).toBe(2);
  });

  it("should sum correctly for negative number", () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it("should sum correctly for positive and negative number", () => {
    expect(sum(1, -1)).toBe(0);
  });
});
