// Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order. This function should:

// leave the original array unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, and do...while

// not call slice or any other method on the original array

// not call push or concat on any array in any way

const myArray = [1, 2, 3, 4, 5];

const reverseArray = myArray.map((myArray) => myArray).reverse();

console.log(myArray);
console.log(reverseArray);
