// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. Nest within that element another element that is 50px by 50px in size and has a different solid background color. When the user clicks on the outer element its background color should change to a randomly selected color. However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.

var box = document.getElementById("box");
var box2 = document.getElementById("box2");

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

box.addEventListener("click", function () {
    var rndColor =
        "rgb" +
        "(" +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ")";

    box.style.backgroundColor = rndColor;
});

box2.addEventListener("click", function (e) {
    var rndColor =
        "rgb" +
        "(" +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ")";

    box2.style.backgroundColor = rndColor;
    e.stopPropagation();
});
