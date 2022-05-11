const mySecretProperty = "I hate index.js";

console.log("script.js is running now");

exports.msg = "hello from script.js";

exports.log = function () {
    console.log("log was called");
    console.log(mySecretProperty);
};

// setInterval(function () {
//     console.log(Date.now());
// }, 2000);
