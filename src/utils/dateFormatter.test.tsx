import { dateFormatter } from "./dateFormatter";

describe("dateFormatter", () => {
  it("should return a formatted date string when given a valid date string", () => {
    const date = "2022-01-01";
    const result = dateFormatter(date);
    expect(result).toBe("Jan 1, 2022");
  });

  it("should accept a date string in ISO 8601 format", () => {
    const date = "2022-01-01";
    const result = dateFormatter(date);
    expect(result).toBe("Jan 1, 2022");
  });

  it("should accept a date string in RFC 2822 format", () => {
    const date = "Sat, 01 Jan 2022 00:00:00 +0000";
    const result = dateFormatter(date);
    expect(result).toBe("Jan 1, 2022");
  })
});
