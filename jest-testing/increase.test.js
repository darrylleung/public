//increase.test.js
// #1 step: require the module you want to test

const { increase } = require("./increase");

// #2 writing tests for the different test cases
// jest provides a test method
// test takes two arguments:
// 1st a string that describes my test case
// 2nd a callback function that runs my actual test

// testing NaN
test("Passing NaN to increase produces the string ERROR!", () => {
    const result = increase(NaN);
    expect(result).toBe("ERROR!");
});

// testing 0
test("Passing 0 to increase evaluates to sting ERROR!", () => {
    const result = increase(0);
    expect(result).toBe("ERROR!");
});

// testing less than 0
test("Passing a negative number to increase evaluates to sting ERROR!", () => {
    const result = increase(-9);
    expect(result).toBe("ERROR!");
});

//testing number higher than 0 less than a million
test("Passing 2 will evaluate to 2 million", () => {
    expect(increase(2)).toBeGreaterThan(1000000);
});

//testing number higher than a million
test("Passing 1000001 will evaluate to that number", () => {
    expect(increase(1000001)).toBe(1000001);
});
