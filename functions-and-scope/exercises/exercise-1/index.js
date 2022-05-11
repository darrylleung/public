// Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

// sum(5, 10); //15
// sum(5, 10, 15); //30;
// sum(5, 10, 15, 100, 200); //330

function sum() {
    let addedTogether = 0;
    for (i = 0; i < arguments.length; i++) {
        addedTogether += arguments[i];
    }
    return addedTogether;
}

//console.log(sum(200, 550, 1000, 69, 8000));
