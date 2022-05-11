// Empty Values
// Undefined
// Null - considered an Object in JS

// Strings
var greeting = "Hello Truffle!";
var story = 'He said: "How are you?"';
var text = "Morning! \n\n\t\tNext line";
var numberString = "1234";

// Booleans

var boolean1 = true;
var boolean2 = false;

// Numbers

var myFavoriteNumbers = 7;
var otherNumber = 7.509;
var negativeNumber = -7.509;

// NaN - Not a Number, considered a Number data type, use isNaN to check whether it is NaN

// Bigint - add n following integer

var biggestNumber = Number.MAX_SAFE_INTEGER;
var biggestNumberPlus2 = biggestNumber + 2; //this breaks

var myBigInt = 7n;

// Symbol

// Object - list of characteristics, properties
var cohort = {
    name: "Truffle",
    year: 2022,
};

//  Arrays - to check if Array, Array.isArray()
var cohorts = ["Truffle", "Onion", "Rue"];

//  Functions
function sum(a, b) {
    return a + b;
}

//  Dates
//  Regular Expressions

// typeof - operator used to check type of data

// if block

// NOT !a

// AND a && b

// OR a || b

//var a = null;
//var b = "Hello";

//var orCondition = a || b;
//var andCondition = a && b;

//console.log(orCondition);

// Ternary Operator - CONDITION ? IF_TRUE : IF_FALSE

/*function greetTernary(time) {
    time < 12 ? console.log("Good Morning") : console.log("Good Afternoon");
}

greetTernary(9);*/

// Loops

/*for (var character of "Truffle") {
    console.log(character);
}*/

/*var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}*/

function logType(value) {}

logType(true); // boolean
logType({}); // object
