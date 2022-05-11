(function () {
    var box = document.getElementById("box");
    var move = document.getElementById("move");
    var back = document.getElementById("moveBack");

    // console.log(box);
    // console.log(move);
    // console.log(back);

    move.addEventListener("click", function () {
        // console.log("move click is happening!");
        box.classList.add("on");
    });
    moveBack.addEventListener("click", function () {
        // console.log("clicked on back");
        box.classList.remove("on");
    });
})();
