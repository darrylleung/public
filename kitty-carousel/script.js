(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var current = 0;
    var container = document.getElementById("kitties");
    var buttons = document.querySelectorAll("#kitties button");
    var transitioning = false;
    var timer = setTimeout(moveKitties, 5000);

    // IIFE technique
    // for (var i = 0; i < buttons.length; i++) {
    //     (function (x) {
    //         buttons[x].addEventListener("click", function () {
    //             console.log("x: ", x);
    //         });
    //     })(i);
    // }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            if (transitioning) {
                return;
            }
            clearTimeout(timer); // cancel what you had planned to do
            for (var j = 0; j < buttons.length; j++) {
                if (buttons[j] === e.target) {
                    moveKitties(j);
                    break;
                }
            }
        });
    }

    container.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            transitioning = false;
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 5000);
            console.log("timer: ", timer);
        }
    });

    function moveKitties(buttonIndex) {
        console.log("buttonIndex: ", buttonIndex);
        kitties[current].classList.remove("onscreen");
        transitioning = true;
        kitties[current].classList.add("exit");
        buttons[current].classList.remove("on");
        current++;
        // don't bring on the next one, bring on the one i clicked
        if (current == kitties.length) {
            current = 0;
        }
        if (typeof buttonIndex === "number") {
            current = buttonIndex;
        }
        kitties[current].classList.add("onscreen");
        buttons[current].classList.add("on");
    }
})();
