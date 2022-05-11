const express = require("express");
const app = express();
let { getToken, getTweets, formatTweets } = require("./twitter.js");
let { promisify } = require("util");

getToken = promisify(getToken);
getTweets = promisify(getTweets);

app.use(express.static("./public"));

app.get("/headlines.json", (req, res) => {
    getToken().then((token) => {
        Promise.all([
            getTweets(token, "nytimes"),
            getTweets(token, "ap"),
            getTweets(token, "bbcnews"),
            getTweets(token, "dwnews"),
            getTweets(token, "scmpnews"),
        ])
            .then((tweets) => {
                // console.log(tweets);
                res.json(formatTweets(tweets));
            })
            .catch((err) => {
                console.log("Error!", err);
            });
    });
});

app.listen(8080, () => console.log(`I'm listening.`));
