const sum = require("./2-sum2")

it("should throw an error if inputs are not numbers", () => {
    expect(() => sum("", "")).toThrow("Input must be numbers"); 
  });