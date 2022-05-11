// Write a function called invertCase that expects a string as a parameter.
// This function should return a new string with all the same characters as
// the string that was passed in but with the cases of the alphabetic
// characters switched. Uppercase characters should become lowercase and
// lowercase letters should become uppercase. Characters that are not alphabetic
// should not change. The toUpperCase and toLowerCase methods that all strings
// have will come in handy here.

// "abc".toUpperCase();

// "a" == "a".toLowerCase();

function invertCase(str) {
    var output = "";
    var string;
    for (let i = 0; i < str.length; i++) {
        string = str[i];
        if (str[i] == string.toUpperCase()) {
            output += string.toLowerCase();
        } else {
            output += string.toUpperCase();
        }
    }
    return output;
}

console.log(invertCase("It'S oNlY jAvAsCrIpT iN 2022"));
