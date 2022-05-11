(function () {
    var headlines = $("#headlines");
    var left = headlines.offset().left;
    var links = headlines.find("A");
    var reqID;

    // console.log("headlines: ", headlines);
    // console.log("left position of headlines: ", left);
    // console.log("links: ", links);

    function moveHeadlines() {
        left -= 5;
        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            headlines.append(links.eq(0));
            links = headlines.find("A");
        }
        headlines.css("left", left + "px");
        reqID = requestAnimationFrame(moveHeadlines);
    }

    links
        .on("mouseenter", function (e) {
            cancelAnimationFrame(reqID);
        })
        .on("mouseleave", function (e) {
            requestAnimationFrame(moveHeadlines);
        });

    moveHeadlines();
})();
