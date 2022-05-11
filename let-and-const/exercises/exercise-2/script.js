// Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it. This function should

// leave the original arrays unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

// not call slice or any other method on the two arrays passed to it

// not call push or concat on any array in any way

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const combined = (arr1, arr2) => [...arr1, ...arr2];

console.log(combined(array1, array2));
