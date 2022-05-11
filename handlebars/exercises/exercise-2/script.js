(function () {
    //////////////////⬇️ DO NOT TOUCH ⬇️/////////////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //////////////////⬆️ DO NOT TOUCH ⬆️/////////////////////

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
                var data = { results: [] };

                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://gmcare.org/uploads/category_thumbnails/thumbnail.png";

                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }

                    const currentResult = {
                        artist: response.items[i].name,
                        photo: defaultImage,
                    };

                    data.results.push(currentResult);
                }

                setNextUrl(response);

                if (response.items.length > 0) {
                    $(".results-msg").html(
                        "Results for <em>" + userInput + "</em>"
                    );
                } else {
                    $(".results-msg").html("No results");
                }

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
                                var data = { results: [] };

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

                                    const currentResult = {
                                        artist: response.items[i].name,
                                        photo: defaultImage,
                                    };

                                    data.results.push(currentResult);
                                }

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
                                    var data = { results: [] };

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

                                        const currentResult = {
                                            artist: response.items[i].name,
                                            photo: defaultImage,
                                        };

                                        data.results.push(currentResult);
                                    }

                                    setNextUrl(response);
                                    checkScrollPos();
                                },
                            });
                        } else {
                            checkScrollPos();
                        }
                    }, 500);
                }
                $(".results-images").html(
                    Handlebars.templates.artistImage(data)
                );
                $(".results-text").html(Handlebars.templates.artistName(data));
            },
        });
    });
})();
