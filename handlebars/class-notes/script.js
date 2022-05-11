(function () {
    ///////////// DO NOT TOUCH /////////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ///////////// DO NOT TOUCH /////////////////

    var truffleObj = {
        name: "Truffle",
        nickName: "The Truffelupelums",
        favouriteFood: ["Truffles", "Sushi", "Pizza", "Chocolate"],
        skills: {
            javascript: true,
            html: 10,
            dancing: "pretty good on average",
        },
    };

    $(".truffle-info").html(Handlebars.templates.truffle(truffleObj));
})();
