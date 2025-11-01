// JavaScript has strict type 
// checking the typeof all variable to consider it numerical value

const sum = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        throw new TypeError("Please Enter a Number");
    }
}

const sub = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    else {
        throw new TypeError("Please Enter a Number");
    }
}

const multi = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else {
        throw new TypeError("Please Enter a Number");
    }
}

const div = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by Zero");
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
    }
    else {
        throw new TypeError("Please Enter a Number");
    }
}

module.exports = {
    sum,
    sub, 
    multi,
    div
}