import { isValidEmail } from "./utils";

describe("utils", () => {
  it("should return true when passed c@h.com", () => {
    // arrange

    // act
    const isValid = isValidEmail("c@h.com");

    // assert
    expect(isValid).toBe(true);
  });

  it("should return false when passed c.com", () => {
    // arrange

    // act
    const isValid = isValidEmail("c.com");

    // assert
    expect(isValid).toBe(false);
  });

  it("should return false when passed an empty string", () => {
    // arrange

    // act
    const isValid = isValidEmail("");

    // assert
    expect(isValid).toBe(false);
  });
});
