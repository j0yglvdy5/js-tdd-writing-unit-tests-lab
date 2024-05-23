// src/__tests__/isPalindrome.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("returns true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("returns true for a simple palindrome", () => {
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});
