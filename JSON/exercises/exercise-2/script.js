function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

function translateNumberToGerman() {
    let germanNumbers = [
        "Ein",
        "Zwei",
        "Drei",
        "Vier",
        "Fünf",
        "Sechs",
        "Sieben",
        "Acht",
        "Neun",
        "Zehn",
    ];
    try {
        let x = askForNumber();
        alert(germanNumbers[x - 1]);
    } catch (err) {
        return translateNumberToGerman();
    }
}

translateNumberToGerman();

//if... else if... recognized input but "return" didn't make the translation visually appear.
//the below might work if we use another way to make the return visual. Couldn't use alert()
//in place of return.

// if (x === 1) {
//     return "Ein";
// } else if (x === 2) {
//     return "Zwei";
// } else if (x === 3) {
//     return "Drei";
// } else if (x === 4) {
//     return "Vier";
// } else if (x === 5) {
//     return "Fünf";
// } else if (x === 6) {
//     return "Sechs";
// } else if (x === 7) {
//     return "Sieben";
// } else if (x === 8) {
//     return "Acht";
// } else if (x === 9) {
//     return "Neun";
// } else if (x === 10) {
//     return "Zehn";
// }
