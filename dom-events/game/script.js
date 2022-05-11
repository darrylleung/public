var runners = document.getElementsByClassName("runner");
var donuts = document.getElementsByClassName("donut");

var moon = 0;
var monkey = 0;
var demon = 0;
var angel = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}

function winnerCheck() {
    for (var i = 0; i < runners.length; i++) {
        if (
            runners[i].offsetLeft + runners[i].offsetWidth >
            donuts[i].offsetLeft
        ) {
            console.log("GAME OVER!", runners[i].innerText, "is the winner...");
            document.removeEventListener("keydown", game);
        }
    }
}

function game(e) {
    if (e.keyCode === 32) {
        moon += getRandomNumber();
        monkey += getRandomNumber();
        demon += getRandomNumber();
        angel += getRandomNumber();

        runners[0].style.left = moon + "px";
        runners[1].style.left = monkey + "px";
        runners[2].style.left = demon + "px";
        runners[3].style.left = angel + "px";

        winnerCheck();
    }
}

document.addEventListener("keydown", game);

// rgb(255, 255, 255); use random number method thrice
// to generate random color using RGB
