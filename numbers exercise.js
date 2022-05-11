const numbers = [8, 6, -10, 7, -3, -32, 5];
//filter out the negative numbers
//sort the positive numbers in ascending order
//multiply all the numbers by 10

const positiveSortedMultipliedNumbers = numbers
    .filter((number) => number > 0) // filter out negative numbers
    .sort((numberA, numberB) => numberA - numberB) // sort in ascending order
    .map((number) => number * 10); // create a new array multiplying all the numbers by 10
console.log(positiveSortedMultipliedNumbers);

for (const number of numbers) {
} //the above code can also be written as a for loop
