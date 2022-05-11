// eq used to select from a list

(function () {
    var lis = $("li");
    console.log(lis[0]);
    console.log(lis.eq(0));

    // lis.html("VIDEO GAMES");
    console.log(
        lis
            .html("VIDEO GAMES")
            .css({
                color: "tomato",
                fontWeight: "bold",
                textDecoration: "underline",
            })
            .attr("title", "this element has a title")
            .first()
            .next()
            .text("funky chicken")
    );

    console.log($("input").val("funky chicken").val());

    //creating an element and addit it
    var elem = $("<div><strong><em>Disco Duck</em></strong></div>");

    //elem.appendTo(lis.eq(2));
    elem.prependTo(lis.eq(2));

    //moving an existing element
    lis.last().html("the last one").appendTo("ul");

    console.log(lis.last().html(), $("li").last().html());

    lis.first().append("<em>first!</em>");

    // console.log($(document).find("body ol li").length);
    console.log($(document.body).find("ol li").length);

    // console.log(lis.first().closest("li").html());

    console.log(lis.first().parent().children().length);

    lis.on("mouseover", function (e) {
        $(e.target).addClass("highlight");
    }).on("mouseout", function (e) {
        $(e.target).removeClass("highlight");
    });

    $(document).on("click", function () {
        lis.eq(4).trigger("mouseover");
    });
})();
