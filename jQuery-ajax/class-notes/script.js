(function () {
    // console.log($);
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (response) {
            // console.log("response: ", response);

            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                console.log("each", response[i]);

                var city = "<div>" + response[i].city + "</div>";
                myHtml += city; // myHtml = myHtml + city
            }

            // console.log("myHtml: ", myHtml);
            $("#results").html(myHtml);
        },
    });
})();
