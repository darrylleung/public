(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");
    var reqID;

    // console.log("headlines: ", headlines);
    // console.log("left position of headlines: ", left);
    // console.log("links: ", links);

    function moveHeadlines() {
        left -= 5;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        reqID = requestAnimationFrame(moveHeadlines);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            // console.log("e", e.target);
            cancelAnimationFrame(reqID);
        });

        links[i].addEventListener("mouseleave", function (e) {
            // console.log("e", e.target);
            requestAnimationFrame(moveHeadlines);
        });
    }

    moveHeadlines();
})();
