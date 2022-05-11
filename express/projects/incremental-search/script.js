(function () {
    var inp = $("input");
    var resultsContainer = $("#results");

    inp.on("input focus", function () {
        var val = inp.val();
        if (!val) {
            resultsContainer.removeClass("visibility");
            resultsContainer.empty();
            return;
        }
        resultsContainer.addClass("visibility");

        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: val,
            },
            success: function (response) {
                var resultsHtml = "";
                if (inp.val() === val) {
                    for (let i = 0; i < response.length; i++) {
                        resultsHtml += "<div>" + response[i] + "</div>";
                    }
                    resultsContainer.html(resultsHtml).show();
                } else {
                    resultsHtml += "<div>No results</div>";
                }
                resultsContainer.html(resultsHtml).show();
            },
        });
    });

    $(document)
        .on("mouseover", "#results div", function (e) {
            // console.log("mouseover: ", e);
            $(e.target).addClass("highlight");
        })
        .on("mouseout", "#results div", function (e) {
            $(e.target).removeClass("highlight");
        })
        .on("mousedown", "#results div", function (e) {
            // console.log("mousedown: ", e);
            inp.val(e.target.innerHTML);
            resultsContainer.hide();
        });

    inp.on("keydown", function (e) {
        var results = $("#results div");
        var highlighted = $(".highlight");

        if (e.key == "ArrowDown" && !highlighted.length) {
            $(results).first().addClass("highlight");
        } else if (e.key == "ArrowUp" && !highlighted.length) {
            $(results).last().addClass("highlight");
        } else if (
            e.key == "ArrowDown" &&
            highlighted.index() === results.length - 1
        ) {
            return;
        } else if (e.key == "ArrowDown" && highlighted.length) {
            highlighted.next().addClass("highlight");
            highlighted.removeClass("highlight");
        } else if (e.key == "ArrowUp" && highlighted.length) {
            highlighted.prev().addClass("highlight");
            highlighted.removeClass("highlight");
        } else if (e.key == "Enter" && highlighted.length) {
            inp.val(highlighted.html());
            resultsContainer.hide();
        }
    });

    inp.blur(function () {
        resultsContainer.hide();
    });

    inp.focus(function () {
        resultsContainer.show();
    });
})();
