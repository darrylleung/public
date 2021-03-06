// Make a page that has on it an element that is 100px by 100px in size and has a solid black border. When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

var box = document.getElementById("box");

box.addEventListener("mousedown", function () {
    var rndColor =
        "rgb" +
        "(" +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ")";

    // console.log(rndColor);
    box.style.backgroundColor = rndColor;
});

box.addEventListener("mouseup", function () {
    var rndColor =
        "rgb" +
        "(" +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ")";

    // console.log(rndColor);
    box.style.backgroundColor = rndColor;
});
