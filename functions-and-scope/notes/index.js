/// scope - variable access
// global scope

// var a = 100;
// b = 300;

// function fn() {
//     console.log("a: ", a);
// }

// local scope

// function hello() {
//     var name = "Andrea";
//     console.log("Hello " + name);
// }

// hello();

// lexical scoping

// var num = 2;

// function myFn() {
//     var name = "Andrea";

//     function myNestedFn() {
//         console.log(num);
//         console.log(name);
//     }

//     myNestedFn();
// }

// myFn();

// iffe - immediately-invoked function expression. ALWAYS WRITE AN IFFE SO VARIABLES ARE DECLARED IN LOCAL SCOPE.
// REMEMBER TO INVOKE IFFE -> (function())();

// (function () {
//     var a = 1;
//     console.log(typeof a);
// })();

/// HOISTING

// var a = 100;
// var b = 200;

// var a, b;
// a = 100;
// b = 200;

// a = 100;
// b = 200;
// var a, b;

// console.log(name);
// var name = "Andrea";

////// FUNCTIONS! code that conducts a task.

// function declaration - gets hoisted!

// console.log(square(2));

// function square(number) {
//     return number * number;
// }

// function expression - does not get hoisted!

// var square = function (number) {
//     return number * number;
// };

// console.log(square(2));

// var sayBye = function () {
//     console.log("Bye");
//     return "Bye";
// };

// sayBye();

// callback - a function that is passed as an argument to ANOTHER function. Asynchronous code.

//setTimeout(arg1, arg2);
// arg1 - function that runs after a set amount of time
// arg2 - the amount of time to wait before running arg1 (fn), time is in milliseconds

setTimeout(function () {
    console.log("this runs after a set amount of time");
}, 4000);

// function sayHi(name) {
//     console.log("Hi " + name);
// }

// sayHi("Darryl");

// Arguments Keyword - leave function empty if you do not know how many arguments the function might take. OR if you are not expecting any arguments.
// function sayHi() {
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments[1]);
// }

// sayHi("Andrea", "Oli", "Merle", "David", "Alistair");

/// Recursion - function that calls itself

// function countdown(num) {
//     console.log(num);

//     if (num > 0) {
//         countdown(num - 1);
//     }
// }

// countdown(5);
