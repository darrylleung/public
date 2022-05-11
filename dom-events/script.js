var button = document.getElementById("first-button");
var entirePage = document.getElementsByTagName("body")[0];
var inputField = document.querySelector("input");
var newDiv = document.getElementsByClassName("new-div")[0];
var takeMeToSpiced = document.querySelector("a");

takeMeToSpiced.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("HAHA no sorry you have to stay right here");
});

newDiv.addEventListener("click", function () {
    newDiv.style.backgroundColor = "blue";
});

button.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("the button was clicked");
    entirePage.style.backgroundColor = "green";
});

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 80) {
        console.log("YAYYAYYAY the user pressed P");
        document.body.style.backgroundColor = "red";
    }
});

inputField.addEventListener("input", function (e) {
    console.log("input is happening");
    e.target.value = "truffle is so delicious";
});
