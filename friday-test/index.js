var x = 500;
var doubleX = timesTwo(x);
var numbers = [x, doubleX];

// overwrite numbers with an empty array
// give numbers a property named y and set it to the value of the doubleX variable
function timesTwo(num) {
    return num * 2;
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = [];

numbers.y = doubleX;

console.log(numbers);
