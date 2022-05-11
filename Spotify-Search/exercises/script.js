(function () {
    var $searchButton = $(".search-button");
    var $moreButton = $(".more-button");
    var nextURL;

    function setNextUrl(response) {
        nextURL =
            response.next &&
            response.next.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify"
            );
    }

    $("input").on("keydown", function (e) {
        if (e.key == "Enter") {
            $searchButton.trigger("click");
        }

        if (e.key == "Backspace" && $moreButton.hasClass("visibility")) {
            $moreButton.removeClass("visibility");
        }
    });

    $(".results-container").on("scroll", function () {
        history.replaceState(null, null, "?scroll=infinite");
    });

    $searchButton.on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        var defaultURL = "https://spicedify.herokuapp.com/spotify";

        $.ajax({
            url: defaultURL,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;

                var resultsText = "";
                var resultsImages = "";
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://gmcare.org/uploads/category_thumbnails/thumbnail.png";

                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }

                    resultsImages +=
                        '<div><a href="' +
                        response.items[i].external_urls.spotify +
                        '" target="blank">' +
                        '<img src="' +
                        defaultImage +
                        '" alt="some image" ></a></div>';

                    resultsText +=
                        '<a href="' +
                        response.items[i].external_urls.spotify +
                        '" target="blank">' +
                        "<div>" +
                        response.items[i].name +
                        "</div></a>";
                }

                $(".results-images").html(resultsImages);
                $(".results-text").html(resultsText);

                if (response.items.length > 0) {
                    $(".results-msg").html(
                        "Results for <em>" + userInput + "</em>"
                    );
                } else {
                    $(".results-msg").html("No results");
                }

                setNextUrl(response);

                if (
                    nextURL != null &&
                    window.location.search.indexOf("scroll=infinite") < 0
                ) {
                    $moreButton.addClass("visibility");

                    $moreButton.on("click", function () {
                        $.ajax({
                            url: nextURL,
                            method: "GET",
                            data: {
                                query: userInput,
                                type: artistOrAlbum,
                            },
                            success: function (response) {
                                response = response.artists || response.albums;
                                console.log("response: ", response);

                                var resultsText = "";
                                var resultsImages = "";
                                for (
                                    var i = 0;
                                    i < response.items.length;
                                    i++
                                ) {
                                    var defaultImage =
                                        "https://gmcare.org/uploads/category_thumbnails/thumbnail.png";

                                    if (response.items[i].images.length > 0) {
                                        defaultImage =
                                            response.items[i].images[0].url;
                                    }

                                    resultsImages +=
                                        '<div><a href="' +
                                        response.items[i].external_urls
                                            .spotify +
                                        '" target="blank">' +
                                        '<img src="' +
                                        defaultImage +
                                        '" alt="some image" ></a></div>';

                                    resultsText +=
                                        '<a href="' +
                                        response.items[i].external_urls
                                            .spotify +
                                        '" target="blank">' +
                                        "<div>" +
                                        response.items[i].name +
                                        "</div></a>";
                                }

                                $(".results-images").append(resultsImages);
                                $(".results-text").append(resultsText);

                                setNextUrl(response);
                            },
                        });
                    });
                }

                if (window.location.search.indexOf("scroll=infinite") > -1) {
                    checkScrollPos();
                }

                function checkScrollPos() {
                    let scrollHeight = $(".results-container")[0].scrollHeight;
                    let currentScrollPos = $(".results-container").scrollTop();
                    console.log(currentScrollPos);

                    setTimeout(function () {
                        if (currentScrollPos >= scrollHeight - 1000) {
                            $.ajax({
                                url: nextURL,
                                method: "GET",
                                data: {
                                    query: userInput,
                                    type: artistOrAlbum,
                                },
                                success: function (response) {
                                    response =
                                        response.artists || response.albums;
                                    console.log("response: ", response);

                                    var resultsText = "";
                                    var resultsImages = "";
                                    for (
                                        var i = 0;
                                        i < response.items.length;
                                        i++
                                    ) {
                                        var defaultImage =
                                            "https://gmcare.org/uploads/category_thumbnails/thumbnail.png";

                                        if (
                                            response.items[i].images.length > 0
                                        ) {
                                            defaultImage =
                                                response.items[i].images[0].url;
                                        }

                                        resultsImages +=
                                            '<div><a href="' +
                                            response.items[i].external_urls
                                                .spotify +
                                            '" target="blank">' +
                                            '<img src="' +
                                            defaultImage +
                                            '" alt="some image" ></a></div>';

                                        resultsText +=
                                            '<a href="' +
                                            response.items[i].external_urls
                                                .spotify +
                                            '" target="blank">' +
                                            "<div>" +
                                            response.items[i].name +
                                            "</div></a>";
                                    }

                                    $(".results-images").append(resultsImages);
                                    $(".results-text").append(resultsText);

                                    setNextUrl(response);
                                    checkScrollPos();
                                },
                            });
                        } else {
                            checkScrollPos();
                        }
                    }, 500);
                }
            },
        });
    });
})();
