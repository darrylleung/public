// Write a function named waitThenRun that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

//  waitThenRun(function() {
//      console.log('Hello!');
//      waitThenRun(function() {
//          console.log('Goodbye!');
//      }); // logs 'Goodbye!' 1.5 seconds later
//  }); // logs 'Hello!' 1.5 seconds later

// function waitThenRun() {
//     setTimeout(function () {
//         console.log("Hello!");
//     }, 1500);
//     setTimeout(function () {
//         console.log("Goodbye!");
//     }, 3000);
// }

// function waitThenRun() {
//     setTimeout(function () {
//         console.log("Hello!");
//         setTimeout(function () {
//             console.log("Goodbye!");
//         }, 1500);
//     }, 1500);
// }

// waitThenRun();

function waitThenRun(value) {
    setTimeout(value, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    }); // logs 'Goodbye!' 1.5 seconds later
}); // logs 'Hello!' 1.5 seconds later
