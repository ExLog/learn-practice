import { describe, expect, it } from "bun:test";
import sum from "./index.js";

describe("sum", () => {
  it("should return 0 when one of the parameters is not a number", () => {
    expect(sum("a", 2)).toEqual(0);
    expect(sum(1, true)).toEqual(0);
  });

  it("should return 0 when one of the parameters is less than 0", () => {
    expect(sum(-1, 2)).toEqual(0);
    expect(sum(1, -2)).toEqual(0);
  });

  it("should return sum of two numbers", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});
