const checkAge = require("./0-checkAge")

it("should return the age for ages greater than 18", () => {
    expect(checkAge(19)).toBe("You are eligible"); // Compare numeric output
  });