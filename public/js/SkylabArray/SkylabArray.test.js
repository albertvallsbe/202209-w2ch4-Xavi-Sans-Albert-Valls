import SkylabArray from "./SkylabArray.js";

describe("Given the function SkaylabArray ", () => {
  describe("When it receives 1,2", () => {
    test("Then it should return 2", () => {
      const value = 1;
      const value2 = 2;
      const expectedResult = 2;

      const object = new SkylabArray(value, value2);
      const objectMethod = object.countLength();

      expect(objectMethod).toBe(expectedResult);
    });
  });
});
