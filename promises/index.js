const dbl = require("./dbl");

Promise.all([dbl(20), dbl(40), dbl(80)]).then(function (val) {
    console.log("all done", val);
});

// console.log(dbl(100));

// dbl(100)
//     .then(function (val) {
//         console.log(val);
//         console.log("something");
//         return dbl(val);
//     })
//     .then(function (val) {
//         console.log("prom2 is resolved", val);
//         return dbl(val + "pizza");
//     })
//     .then(function (val) {
//         console.log("prom3 is resolved", val);
//     })
//     .catch(function (err) {
//         console.log("ERROR!", err.message);
//         // throw new Error;
//     })
//     .then(function () {
//         console.log("fix0red");
//     });

// console.log(prom2);
// prom.then(function (val) {
//     console.log(val);
// });

getTweets = promisify(getTweets);

app.get("/headlines", function (req, res) {
    getToken()
        .then(function (token) {
            return Promise.all([
                getTweets(token, "theonion"),
                getTweets(token, "nytimes"),
                getTweets(token, "bbcnews"),
            ]);
        })
        .then((arr) => {
            arr = arr.flat();
            arr.sort(() => {
                return new Date(a.created_at) - new Date(b.created_at);
            });
        })
        .catch((err) => {
            return "Error!", err;
        });
});
