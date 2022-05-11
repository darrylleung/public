(function () {
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (response) {
            // console.log("response: ", response);
            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                // console.log("each", response[i]);

                var theNews =
                    "<a href=" +
                    "'" +
                    response[i].href +
                    "'" +
                    " target='blank'>" +
                    response[i].text +
                    " </a>";
                myHtml += theNews;
            }
            $("#headlines").html(myHtml);
        },
    });

    $(document).ajaxComplete(function () {
        var headlines = $("#headlines");
        var left = headlines.offset().left;
        var links = headlines.find("a");
        var reqID;

        for (var i = 0; i < links.length; i++) {
            $(links[i]).on("mouseenter", "headlines a", function (e) {
                cancelAnimationFrame(reqID);
            });
            $(links[i]).on("mouseleave", "headlines a", function (e) {
                cancelAnimationFrame(reqID);
                moveHeadlines();
            });
        }

        function moveHeadlines() {
            left -= 5;
            if (left <= -links.first().outerWidth()) {
                left += links.first().outerWidth();

                links.first().appendTo(headlines);

                links = $("a");
            }

            headlines.css("left", left + "px");

            reqID = requestAnimationFrame(moveHeadlines);
        }

        moveHeadlines();
    });
})();
