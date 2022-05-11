// Write a function called getLessThanZero that expects an array of numbers to be passed
// to it and returns a new array containing only those numbers from the array that was
// passed in that are less than zero.

// getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
// getLessThanZero([1, 2]); //[]

// Solution 1 using arrow function
// function getLessThanZero(array) {
//     let reduced = array.filter((number) => number < 0);
//     return reduced;
// }

//Solution 2
function getLessThanZero(array) {
    let reduced = array.filter(function (number) {
        return number < 0;
    });
    return reduced;
}

console.log(getLessThanZero([1, 2, -1, -90, 10]));
