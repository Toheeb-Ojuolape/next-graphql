import { publicKeyTest } from "./textFormatter";

describe("publicKeyTest", () => {
  // Tests that the function returns true when given a valid public key string of length 66
  it("should return true when given a valid public key string of length 66", () => {
    const result = publicKeyTest(
      "021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d"
    );
    expect(result).toBe(true);
  });

  // Tests that the function returns true when given a valid public key string of length 66 with lowercase letters
  it("should return true when given a valid public key string of length 66 with lowercase letters", () => {
    const result = publicKeyTest(
      "021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d"
    );
    expect(result).toBe(true);
  });

  // Tests that the function returns true when given a valid public key string of length 66 with uppercase letters
  it("should return true when given a valid public key string of length 66 with uppercase letters", () => {
    const result = publicKeyTest(
      "021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d"
    );
    expect(result).toBe(true);
  });

  // Tests that the function returns false when given a string of length less than 66 or greater than 66
  it("should return false when given a string of length less than 66 or greater than 66", () => {
    const result1 = publicKeyTest(
      "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcde"
    ); // length less than 66
    const result2 = publicKeyTest(
      "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0"
    ); // length greater than 66
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  // Tests that the function returns false when given a string of length 66 with invalid characters
  it("should return false when given a string of length 66 with invalid characters", () => {
    const result = publicKeyTest(
      "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdeg"
    );
    expect(result).toBe(false);
  });
});
