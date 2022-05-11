const countries = require("./countries");
const { find } = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    expect(find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(find("a")).toEqual(["Afghanistan", "Albania", "Algeria", "Andorra"]);
});

test("The search is case insensitive", () => {
    expect(find("afGhAnIsTaN")).toEqual(["Afghanistan"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(find("x")).toEqual([]);
});
