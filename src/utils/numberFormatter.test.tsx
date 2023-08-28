import { numberFormatter } from "./textFormatter";

describe("numberFormatter", () => {
  // Tests that the function correctly formats a positive integer
  it("should correctly format a positive integer", () => {
    const result = numberFormatter(1234);
    expect(result).toBe("1,234");
  });

  // Tests that the function correctly formats a negative integer
  it("should correctly format a negative integer", () => {
    const result = numberFormatter(-1234);
    expect(result).toBe("-1,234");
  });

  // Tests that the function correctly formats a positive float
  it("should correctly format a positive float", () => {
    const result = numberFormatter(12.34);
    expect(result).toBe("12.34");
  });

  // Tests that the function correctly formats a negative float
  it("should correctly format a negative float", () => {
    const result = numberFormatter(-12.34);
    expect(result).toBe("-12.34");
  });

  // Tests that the function correctly formats a string representation of a positive integer
  it("should correctly format a string representation of a positive integer", () => {
    const result = numberFormatter("1234");
    expect(result).toBe("1,234");
  });

  // Tests that the function correctly formats a string representation of a negative integer
  it("should correctly format a string representation of a negative integer", () => {
    const result = numberFormatter("-1234");
    expect(result).toBe("-1,234");
  });
});
