(function () {
    var box = document.getElementById("box");
    var left = box.offsetLeft;
    // console.log("box: ", box);
    console.log("original left position: ", left);
    function moveBox() {
        // left = left - 1;
        left--;
        console.log("left after decrementing: ", left);
        if (left <= -150) {
            console.log("box is way off to the left - please come back");

            left = 400;
        }
        box.style.left = left + "px";

        requestAnimationFrame(moveBox);
    }

    moveBox();
})();
