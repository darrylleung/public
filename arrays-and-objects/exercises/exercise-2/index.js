// Write a function that takes an array as a parameter and returns a new array
//containing all of the items that are in the array that was passed in but in
//reverse order. Unlike the reverse method that all arrays have, this function
//should leave the original array unchanged.

// If you wrote a valid reverse() function, you should get the following output:

//    var originalArray = [1, 2, 3]
//    var reversedArray = reverse(originalArray)

//    console.log(originalArray) // [1, 2, 3]
//    console.log(reversedArray) // [3, 2, 1]

var originalArray = [1, 2, 3];
var reversedArray = reverse(originalArray);

// Solution 1 using .slice()
// function reverse(value) {
//     var newArray = originalArray.slice(0, value.length);
//     return newArray.reverse();
// }

//Solution 2 using .map()
function reverse(value) {
    return originalArray.map(
        (value, index, arr) => arr[arr.length - index - 1]
    );
}

// function reverse(value) {
//     return originalArray.map(function (value, index, arr) {
//         arr[arr.length - index - 1];
//     });
// }

console.log(originalArray); // [1, 2, 3]
console.log(reversedArray); // [3, 2, 1]
