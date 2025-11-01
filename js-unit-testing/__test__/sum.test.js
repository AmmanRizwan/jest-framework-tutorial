const { sum } = require("../utils/math.js");

test("should add two numbers correctly", () => {
    expect(sum(2, 2)).toBe(4);
});

test("should add numbers with both negative value correctly", () => {
    expect(sum(-2, -3)).toBe(-5);
})

test("should add numbers with one negative value correctly", () => {
    expect(sum(0, -10)).toBe(-10);
})

test("should add numbers with both similar value correctly", () => {
    expect(sum(11, 11)).toBe(22);
})

test("should throw an error with one value is string", () => {
    expect(() => sum(11, '1')).toThrow('Please Enter a Number');
})