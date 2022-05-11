(function () {
    var textarea = $("textarea");

    try {
        textarea.val(localStorage.getItem("previousText"));
    } catch (err) {}

    textarea.on("input", function (e) {
        try {
            localStorage.setItem("previousText", textarea.val());
        } catch (err) {}
    });
})();

// var str = $("textarea").val();
// var inp = $("textarea");

// $(document).ready(inp.val(localStorage.getItem("String")));

// function storeVal() {
//     inp.on("keydown", function () {
//         localStorage.setItem("String", str);
//         console.log(localStorage.getItem("String"));
//     });
// }

// storeVal();
