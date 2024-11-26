const getAverage = require("./1-getAverage")

test('should return the average of three numbers', () => { 
    expect(getAverage(3, 6, 9)).toBe(6)
 })