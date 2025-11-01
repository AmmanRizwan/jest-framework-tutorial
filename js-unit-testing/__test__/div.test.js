const { div } = require('../utils/math.js');

test("should divide two number correctly", () => {
    expect(div(9, 3)).toBe(3);
})

test("should divide two floating number", () => {
    expect(div(3, 2)).toBe(1.5);
})

test("should throw an error while divide with zero", () => {
    expect(() => div(10, 0)).toThrow("Cannot divide by Zero");
})

test("should throw an error while number is string", () => {
    expect(() => div(1, '1')).toThrow("Please Enter a Number");
})