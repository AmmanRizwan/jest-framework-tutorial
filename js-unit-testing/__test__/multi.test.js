const { multi } = require("../utils/math.js");

test("should multiply two numbers correctly", () => {
    expect(multi(2, 10)).toBe(20);
})

test("should multiply with zero correclty", () => {
    expect(multi(0, 10)).toBe(0);
})

test("should multiply one negative number", () => {
    expect(multi(-3, 3)).toBe(-9);
})

test("should multiply both negative number", () => {
    expect(multi(-3, -3)).toBe(9);
})

test("should throw an error when multiply with string", () => {
    expect(() => multi(23, '4')).toThrow("Please Enter a Number");
})