(function () {
    var stickman = document.getElementById("stickman");
    var background = document.getElementById("background");
    // console.log("stickman: ", stickman);

    var s = stickman.getContext("2d");
    var bg = background.getContext("2d");
    s.font = "133px Arial";
    var face = "🌝";

    //landscape
    bg.strokeStyle = "pink";
    bg.lineWidth = 2;
    bg.beginPath();
    bg.moveTo(0, 600);
    bg.lineTo(600, 200);
    bg.lineTo(650, 300);
    bg.lineTo(750, 150);
    bg.lineTo(1000, 350);
    bg.lineTo(1000, 600);
    bg.closePath();
    bg.stroke();
    bg.fillStyle = "pink";
    bg.fill();

    //head
    s.strokeStyle = "#70d778";
    s.lineWidth = 2;
    s.beginPath();
    s.arc(200, 125, 65, 0, Math.PI * 2);
    s.fillText(face, 133, 174);
    s.stroke();
    // s.fillStyle = "#70d778";
    // s.fill();

    //body
    s.strokeStyle = "#70d778";
    s.lineWidth = 2;
    s.beginPath();
    s.moveTo(200, 190);
    s.lineTo(200, 390);
    s.stroke();

    //right arm
    s.strokeStyle = "#70d778";
    s.linedWidth = 2;
    s.beginPath();
    s.moveTo(200, 220);
    s.lineTo(180, 220);
    s.lineTo(164, 292);
    s.lineTo(171, 367);
    s.stroke();

    //left arm
    s.strokeStyle = "#70d778";
    s.linedWidth = 2;
    s.beginPath();
    s.moveTo(200, 220);
    s.lineTo(220, 220);
    s.lineTo(236, 292);
    s.lineTo(231, 367);
    s.stroke();

    //pelvis
    s.strokeStyle = "#70d778";
    s.lineWidth = 2;
    s.beginPath();
    s.moveTo(200, 420);
    s.lineTo(215, 390);
    s.lineTo(185, 390);
    s.closePath();
    s.stroke();
    // s.fillStyle = "mint";
    // s.fill();

    //right leg
    s.strokeStyle = "#70d778";
    s.lineWidth = 2;
    s.beginPath();
    s.moveTo(191, 403);
    s.lineTo(175, 475);
    s.lineTo(180, 550);
    s.lineTo(160, 550);
    s.stroke();

    //left leg
    s.strokeStyle = "#70d778";
    s.lineWidth = 2;
    s.beginPath();
    s.moveTo(209, 403);
    s.lineTo(225, 475);
    s.lineTo(220, 550);
    s.lineTo(240, 550);
    s.stroke();

    var track = 0;

    function moveRight(e) {
        if (e.keyCode === 39) {
            track += 3;

            stickman.style.left = track + "px";
        }
    }

    function moveLeft(e) {
        if (e.keyCode === 37) {
            track -= 3;

            stickman.style.left = track + "px";
        }
    }

    function moveUp(e) {
        if (e.keyCode === 38) {
            track -= 3;

            stickman.style.top = track + "px";
        }
    }

    function moveDown(e) {
        if (e.keyCode === 40) {
            track += 3;

            stickman.style.top = track + "px";
        }
    }

    document.addEventListener("keydown", moveRight);
    document.addEventListener("keydown", moveLeft);
    document.addEventListener("keydown", moveUp);
    document.addEventListener("keydown", moveDown);
})();
