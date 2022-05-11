var button = $("button");
var background = $("#background");

button.on("mousedown", function (e) {
    var str = $("textarea").val();
    console.log(str);
    try {
        JSON.parse(str);
        if (background.hasClass("invalid")) {
            background.removeClass("invalid");
        }
        background.addClass("valid");
        console.log("valid");
    } catch (err) {
        if (background.hasClass("valid")) {
            background.removeClass("valid");
        }
        background.addClass("invalid");
        console.log("invalid");
    }
});
