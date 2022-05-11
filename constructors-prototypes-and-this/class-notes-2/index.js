// var leo = {
//     name: "Leonardo",
//     intro: function (emoji) {
//         console.log("My name is " + this.name + emoji);
//     },
// };

// // leo.intro.call({ name: "Funky Chicken" }, "🍅");
// leo.intro("🍅");
// var fn = leo.intro;

// console.log(fn == leo.intro);

// fn("🍅");

var dbl07 = {
    first: "James",
    last: "Bond",
    intro: function () {
        console.log(this.last + ".");
        var me = this;
        setTimeout(
            function () {
                console.log(this.first + " " + this.last + ".");
            }.bind(this),
            1000
        );
    },
};

dbl07.intro();
