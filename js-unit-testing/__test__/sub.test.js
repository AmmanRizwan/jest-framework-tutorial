const { sub } = require("../utils/math.js");

test("should subtract two number correctly", () => {
    expect(sub(5, 4)).toBe(1);
})

test("should subtract numbers with same value", () => {
    expect(sub(3, 3)).toBe(0);
})

test("should subtract number with one greater value", () => {
    expect(sub(0, 12)).toBe(-12);
})

test("should return zero correclty", () => {
    expect(sub(0, 0)).toBe(0);
})

test("should throw an error one due to one string value", () => {
    expect(() => sub('12', 0)).toThrow("Please Enter a Number");
})