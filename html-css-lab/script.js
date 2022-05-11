(function () {
    var hamburger = $(".hamburgermenu");
    var overlay = $(".overlay");
    var sideNav = $(".side-nav");
    var closeOut = $(".close-out");
    var popup = $(".popup");
    var popupClose = $(".popup-close");

    setTimeout(function () {
        popup.addClass("visible");
    }, 1000);

    popupClose.on("click", function () {
        popup.removeClass("visible");
    });
    hamburger.on("click", function () {
        console.log("open side-nav click is happening!");
        sideNav.addClass("open");
        overlay.addClass("visible");
    });
    closeOut.on("click", function () {
        console.log("close out");
        sideNav.removeClass("open");
        overlay.removeClass("visible");
    });
    overlay.on("click", function () {
        console.log("close out");
        sideNav.removeClass("open");
        overlay.removeClass("visible");
    });
})();
