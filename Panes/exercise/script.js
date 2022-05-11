(function () {
    /* Variables to hold the x position of the outermost container, the width of the outermost container, and the distance of the mouse pointer
    from the left edge of the slider bar. */
    var containerX, containerWidth, offset;

    var slide = $("#slide");
    var container = $("#container");
    var pane1 = $("#pane1");

    slide
        .on("mousedown", function (e) {
            containerX = container.offset().left;
            containerWidth = container.outerWidth();
            var slideX = slide.position().left;
            var pointerX = e.clientX - containerX;
            offset = pointerX - slideX;
            container.on("mousemove", drag);
            e.preventDefault();
        })
        .on("mousemove", function (e) {
            slide.css("left", e.offsetX + "px");
            e.preventDefault();
        });

    $(document).on("mouseup", function () {
        container.off("mousemove");
    });

    function drag(e) {
        if (e.clientX > containerX + containerWidth) {
            return;
        }
        if (e.clientX < containerX) {
            return;
        }
        var px = e.clientX - containerX - offset + "px";
        slide.css({
            left: px,
        });
        pane1.css({
            width: px,
        });
    }
})();

// overflow hidden
