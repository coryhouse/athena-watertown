import { isValidEmail } from "./utils";

describe("utils", () => {
  it("should return true when passed c@h.com", () => {
    // arrange

    // act
    const isValid = isValidEmail("c@h.com");

    // assert
    expect(isValid).toBe(true);
  });
});
